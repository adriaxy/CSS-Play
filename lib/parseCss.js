import { parse, generate } from 'css-tree';

export function parseCssToRules(cssString){
    const ast = parse(cssString, { parseValue: true });

    const blocks = {};

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
                        const value = generate(decl.value).trim(); 
                        blocks[selector.slice(1)][property] = value;
                    }
                })
            }
        }
    });

    return blocks;
}
