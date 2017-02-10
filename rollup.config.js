import buble from 'rollup-plugin-buble';

export default {
    entry: 'src/main.js',
    plugins: [buble()],
    dest: 'out/main.js'
}