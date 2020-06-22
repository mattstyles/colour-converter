
# colour-converter

> Utility to convert from one colour format to another, although currently only does `hsl`...

## Getting started

```sh
npm i -g colour-converter

echo "#663399" | hsl
```

`hsl` can convert objects, arrays, and strings, so the following inputs will all work:

```sh
echo '#88b04b' | hsl
echo '{ "roseQuartz": "#f7cac9" }' | hsl
echo '[ "#f7fafc", "#edf2f7" ]' | hsl
```

`hsl` will attempt to traverse objects looking for viable values to transform so colour palettes are fine to pipe in:

```sh
echo '{ "red": { "400": "#fe6f5e", "700": "#c62d42" } }' | hsl
```

The output can be piped to a file as valid json:

```sh
cat scale.json | hsl > scale-hsl.json
```
