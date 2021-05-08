/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * @File
 * @Author qulongjun@shine.design
 * @Date 2021/5/8 11:33 下午
 */
const path = require( 'path' );
const { COMPONENTS_PATH } = require( './constant' );
const fs = require( 'fs' );

module.exports = function () {
    const entries = fs.readdirSync( COMPONENTS_PATH );
    const entryMap = {}
    entries.forEach( entry => {
        entryMap[ entry ] = {
            import: path.resolve( COMPONENTS_PATH, `./${ entry }/index.tsx` ),
            filename: `components/${ entry }.js`,
        };
    } );
    return entryMap;
}