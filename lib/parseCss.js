import { parse, generate, property } from 'css-tree';

export function parseCssToRules(cssString){
    const ast = parse(cssString, { parseValue: true });

    const blocks = {};

    const toCamelCase = (prop) => {
       return prop.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    }

    ast.children.forEach(rule => {
        if (rule.type === 'Rule'){
            const selector = generate(rule.prelude).trim(); 

            if(selector === '.block1' || selector === '.block2'){
                if(!blocks[selector.slice(1)]) {
                    blocks[selector.slice(1)] = {};
                }

                rule.block.children.forEach(decl => {
                    if (decl.type === 'Declaration') {
                        const property = decl.property;
                        const camelProperty = toCamelCase(property);
                        console.log(property)
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
