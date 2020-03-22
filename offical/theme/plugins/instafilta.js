/*!
 * instaFilta
 * Version: 1.4.4
 * Description: jQuery plugin for performing in-page filtering
 * Homepage and documentation: https://github.com/chromawoods/instaFilta
 * Author: Andreas Larsson <andreas@chromawoods.com> (http://chromawoods.com)
 * Contributions: Jaap-Jan Frans
 */
;(function($) {


    $.fn.instaFilta = function(options) {

        let _filterTerm = null;
            let _filterCategory = null;


        /* Default settings. */
        const settings = $.extend({

            scope: null,
            targets: '.instafilta-target',
            sections: '.instafilta-section',
            categoryDataAttr: 'instafilta-category',
            matchCssClass: 'instafilta-match',
            itemsHideEffect: 'hide',
            itemsHideDuration: 0,
            itemsShowEffect: 'show',
            itemsShowDuration: 0,
            sectionsHideEffect: 'hide',
            sectionsHideDuration: 0,
            sectionsShowEffect: 'show',
            sectionsShowDuration: 0,
            onFilterComplete: null,
            markMatches: false,
            hideEmptySections: true,
            beginsWith: false,
            caseSensitive: false,
            typeDelay: 0,
            useSynonyms: true,
            synonyms: [
                { src: 'à,á,å,ä,â,ã', dst: 'a' },
                { src: 'À,Á,Å,Ä,Â,Ã', dst: 'A' },
                { src: 'è,é,ë,ê', dst: 'e' },
                { src: 'È,É,Ë,Ê', dst: 'E' },
                { src: 'ì,í,ï,î', dst: 'i' },
                { src: 'Ì,Í,Ï,Î', dst: 'I' },
                { src: 'ò,ó,ö,ô,õ', dst: 'o' },
                { src: 'Ò,Ó,Ö,Ô,Õ', dst: 'O' },
                { src: 'ù,ú,ü,û', dst: 'u' },
                { src: 'Ù,Ú,Ü,Û', dst: 'U' },
                { src: 'ç', dst: 'c' },
                { src: 'Ç', dst: 'C' },
                { src: 'æ', dst: 'ae' },
            ],
        }, options);


        /* Split synonym src into arrays. */
        if (settings.useSynonyms) {
            for (let i = 0, l = settings.synonyms.length; i < l; i++) {
                settings.synonyms[i].src = settings.synonyms[i].src.split(',');
            }
        }


        /* Setup each instaFilta instance. */
        this.each(function() {

            let typeTimer;
                let $targets;
                let $sections;
                let $scopeElement;
                let lastTerm = '';

            /* Check if this instance should be bound to a scope. */
            if (settings.scope) {
                $scopeElement = $(this).closest(settings.scope);
                $targets = $scopeElement.find(settings.targets);
                $sections = $scopeElement.find(settings.sections);
            } 

            else {
                $targets = $(settings.targets);
                $sections = $(settings.sections);
            }

            /* Prepare value(s) to match against. */
            $targets.each(function() {

                $target = $(this), original = $target.text();

                $target.data('values', (function(s) {

                    const values = [original]; let normalized = original;

                    if (!settings.useSynonyms) { return values; }

                    for (let i = 0, l = s.length; i < l; i++) {

                        for (let j = 0; j < s[i].src.length; j++) {
                            normalized = normalized.replace(s[i].src[j], s[i].dst);
                        }

                    }

                    !!(normalized === original) || values.push(normalized);

                    return values;

                }(settings.synonyms)));

            });


            /* Will hide any sections that don't have data-instafilta-hidden="false" */
            const toggleSections = function() {

                $sections.each(function() {

                    const $section = $(this);

                    if ($section.find('[data-instafilta-hide="false"]').length) {
                        $section[settings.sectionsShowEffect](settings.sectionsShowDuration);
                    }

                    else {
                        $section[settings.sectionsHideEffect](settings.sectionsHideDuration);
                    }

                });

            };


            /* Apply the results of the filtering process GUI-wise. */
            const toggleResults = function(forceShowAll) {

                const $matchedItems = (function() {
                    return forceShowAll ? $targets.attr('data-instafilta-hide', 'false') : $targets;
                }()).filter('[data-instafilta-hide="false"]')[settings.itemsShowEffect](settings.itemsShowDuration);

                forceShowAll || $targets.filter('[data-instafilta-hide="true"]')[settings.itemsHideEffect](settings.itemsHideDuration);

                settings.hideEmptySections && toggleSections();

                /* Check if a callback function has been provided. */
                if (typeof settings.onFilterComplete === 'function') {
                    settings.onFilterComplete.apply(this, [$matchedItems]);
                }

                return $matchedItems;
            };


            /* Reset the filter completely. */
            const showAll = function() {
                return toggleResults(true);
            };


            /* Main filtering function. */
            _filterTerm = function(term) {

                term = settings.caseSensitive ? term : term.toLowerCase();

                if (lastTerm === term) { return false; }
                 lastTerm = term; 

                term || showAll();

                /* Iterate through associated targets and find matches. */
                $targets.each(function() {

                    const $item = $(this);

                    if (!$item.data('originalText')) {
                        $item.data('originalHtml', $item.html());
                        $item.data('originalText', $item.data('values')[0]);
                    }

                    /* Returns the index at which a match was found. Returns -1 if not found. */
                    const matchedIndex = (function(values, t) {
                        let index = -1;

                        for (let i = 0; i < values.length; i++) {
                            index = (settings.caseSensitive ? values[i] : values[i].toLowerCase()).indexOf(t);
                            if (index >= 0) { break; } // We have a match, no need to iterate further.
                        }

                        return index;
                    }($item.data('values'), term));

                    const originalText = $item.data('originalText');
                        const targetText = settings.caseSensitive ? originalText : originalText.toLowerCase();
                        let matchedText = null;
                        let newText = null;

                    /* If we should mark the match, wrap it in a span tag. */
                    if (matchedIndex >= 0 && settings.markMatches) {
                        matchedText = originalText.substring(matchedIndex, matchedIndex + term.length);
                        newText = originalText.replace(matchedText, '<span class="' + settings.matchCssClass + '">' + matchedText + '</span>');

                        $item.html($item.data('originalHtml').replace(originalText, newText));
                    }

                    $item.attr('data-instafilta-hide', (settings.beginsWith && matchedIndex !== 0) || matchedIndex < 0 ? 'true' : 'false');
                });

                return toggleResults();
            };


            /* Filter items depending on category data attribute. Categories can be a comma separated
             * string or an array of strings. Shows all targets if categories is falsy. */
            _filterCategory = function(categories, requireAll) {

                if (!categories || !categories.length) {
                    return showAll();
                }

                if (typeof categories === 'string') {
                    categories = categories.split(',');
                }

                $targets.each(function() {

                    let hideStatus = true; 
                        let matched = 0;
                        const $item = $(this); 
                        let targetCats = $item.data(settings.categoryDataAttr);

                    if (targetCats) {

                        targetCats = targetCats.split(',');

                        for (let i = 0; i < targetCats.length; i++) {
                            for (let j = 0; j < categories.length; j++) {
                                if (targetCats[i] === categories[j]) {
                                    if (requireAll) { matched++; }
                                    else { hideStatus = false; break; }
                                }
                            }
                        }

                        if (requireAll && matched === categories.length) { hideStatus = false; }
                        $item.html($item.data('originalText')).attr('data-instafilta-hide', hideStatus);
                    }

                });

                return toggleResults();
            };


            /* Setup event handlers. */
            $(this).on('keyup', function() {
                const $field = $(this);

                clearTimeout(typeTimer);

                typeTimer = setTimeout(function() {
                    _filterTerm($field.val());
                }, settings.typeDelay);
            });

        });


        return { 
            filterTerm: _filterTerm,
            filterCategory: _filterCategory,
        };

    };

}(jQuery));