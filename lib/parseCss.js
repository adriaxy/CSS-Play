import { parse, generate, property } from 'css-tree';

// Convierte CSS en un objeto con propiedades y valores (desde el textarea)
export function parseCssToRules(cssString){
    // El parse devuelve un AST (árbol de sintaxis abstracta)
    const ast = parse(cssString, { parseValue: true });

    const blocks = {};

    // Transformamos la sintaxis kebab case de las propiedades css por camel case
    // para poder comparar las  propiedades escritas por el usuario con la sintaxis de React 
    const toCamelCase = (prop) => {
       return prop.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    }

    // Recorremos las reglas de tipo 'Rule'que contienen la propiedad y el valor del código escrito
    ast.children.forEach(rule => {
        if (rule.type === 'Rule'){
            const selector = generate(rule.prelude).trim(); // Guardamos el selector en texto plano y sin posibles espacios

            if(selector === '.block1' || selector === '.block2'){
                if(!blocks[selector.slice(1)]) {
                    blocks[selector.slice(1)] = {};
                }

                // Asignamos propiedad y valor al bloque correspondiente
                rule.block.children.forEach(decl => {
                    if (decl.type === 'Declaration') {
                        const property = decl.property;
                        const camelProperty = toCamelCase(property);
                        const value = generate(decl.value).trim(); 
                        if (!value || value === '' || value === ';') {
                            return;
                        }
                        blocks[selector.slice(1)][camelProperty] = value;
                    }
                })
            }
        }
    });

    return blocks;
}
