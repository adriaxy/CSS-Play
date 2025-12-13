const levels = [
  {
      // PRUEBA NIVEL 1 (SOLO EL NIVEL 2 ESTA COMPLETO --- VER MÁS ABAJO)
    level: 1,
    name: "Dimensions and Spacing",
    sublevels: [
      {
        id: 1-1,
        name: "1-1",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the width property to both blocks so that each one matches the required width shown in the target layout.",
        theory: {
          description: [
            "The width property defines the horizontal size of an element's content area.",
            "It determines how wide the element appears on the page, without affecting the height.",
            "You can set width using various units like pixels (px), percentages (%), or relative units (em, rem).",
            "Using width properly helps control layout and alignment of elements."
          ],
          syntax: ["width: 200px;"]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { width: "50px" },
            initialStyleBlock2: { width: "50px" },
            defaultCode: "/* Block 1 */\n.block1 {\n\n}\n\n/* Block 2 */\n.block2 {\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { width: "50px", height: "50px", background: 'var(--b-light)', borderRadius: '20px'},
            defaultCode: "",
            solution: { width: "150px" },
            viewSolution: 'width: 150px;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { width: "50px", height: "50px", background: 'var(--b-light)', borderRadius: '20px'},
            defaultCode: "",
            solution: { width: "300px" },
            viewSolution: 'width: 300px;'
          },
          {
            id: "blockParent",
            style: {
              padding: "20px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
              justifyContent: 'center',
              gap: '50px'
            }
          }
        ],
        successMessage: "Great! You've learned how width works."
      },

      {
        id: 1-2,
        name: "1.2",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the height property to both blocks so that each one matches the required height shown in the target layout.",
        theory: {
          description: [
            "The height property defines the vertical size of an element's content area.",
            "It determines how tall the element appears on the page, without affecting the width.",
            "You can assign height values in pixels, percentages, or relative units.",
            "Height is essential to control layout and spacing vertically."
          ],
          syntax: ["height: 150px;"]
        },
        blocks: [
          {
            id: "initialStylePlayground",
            defaultCode: '/* Block 1 */\n.block1 {\nwidth: 100px;\n\n}\n\n/* Block 2 */\n.block2 {\nwidth: 100px;\n\n}',
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { height: "50px", width: "100px", background: 'var(--b-light)', borderRadius: '20px'},
            defaultCode: "width: 100px;",
            solution: { width: "100px", height: "120px" },
            viewSolution: 'height: 120px;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { height: "50px", width: "100px", background: 'var(--b-light)', borderRadius: '20px'},
            defaultCode: "width: 100px;",
            solution: { width: "100px", height: "200px" },
            viewSolution: 'height: 200px;'
          },
          {
            id: "blockParent",
            style: {
              paddingBottom: "50px",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: 'flex-end',
              justifyContent: 'center',
              gap: '50px'
            }
          }
        ],
        successMessage: "Awesome! Now you know how to control height."
      }
    ]
  },
  {
    // NIVEL 2 COMPLETO ==>
    level: 2,
    name: "Dimensions and Spacing",
    sublevels: [
      // Sublevel 1: WIDTH
      {
        id: 1,
        name: "width",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the width property to both blocks so that each one matches the required width shown in the target layout, using pixel values.",
        theory: {
        description: [
          "The width property defines the horizontal size of an element’s content area.",
          "By default, it only affects the content box and does not include padding, border, or margin.",
          "Setting a width allows you to control how elements occupy space within a layout.",
          "The final visible size of an element can change depending on other properties such as `padding`, `border`, and `box-sizing`.",
          "Using `width` effectively is essential for building consistent and predictable layouts."
        ],
        syntax: [
          "/* Fixed width */\nwidth: 200px;",
          "/* Relative to parent */\nwidth: 50%;",
          "/* Responsive units */\nwidth: 10rem;",
          "/* Automatic width (default) */\nwidth: auto;"
        ]
      },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { width: "50px" },
            initialStyleBlock2: { width: "50px" },
            defaultCode: "/* Block 1 */\n.block1 {\n\n}\n\n/* Block 2 */\n.block2 {\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { width: "50px", height: "50px", background: 'var(--b-light)', borderRadius: '20px'},
            defaultCode: "",
            solution: { width: "150px" },
            viewSolution: 'width: 150px;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { width: "50px", height: "50px", background: 'var(--b-light)', borderRadius: '20px'},
            defaultCode: "",
            solution: { width: "300px" },
            viewSolution: 'width: 300px;'
          },
          {
            id: "blockParent",
            style: {
              padding: "20px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
              justifyContent: 'center',
              gap: '50px'
            }
          }
        ],
        successMessage: "Great! You've learned how width works."
      },

      // Sublevel 2: HEIGHT
      {
        id: 2,
        name: "height",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the height property to both blocks so that each one matches the required height shown in the target layout.",
        theory: {
        description: [
          "The height property defines the vertical size of an element’s content area.",
          "By default, it only affects the content box and does not include padding, border, or margin.",
          "Setting a height allows you to control how tall elements appear on the page.",
          "The final visible height can change depending on other properties such as `padding`, `border`, and `box-sizing`.",
          "Using height effectively helps maintain layout consistency and alignment."
        ],
        syntax: [
          "/* Fixed height */\nheight: 100px;",
          "/* Relative to parent */\nheight: 50%;",
          "/* Responsive units */\nheight: 10rem;",
          "/* Automatic height (default) */\nheight: auto;"
        ]
      },
        blocks: [
          {
            id: "initialStylePlayground",
            defaultCode: '/* Block 1 */\n.block1 {\nwidth: 100px;\n\n}\n\n/* Block 2 */\n.block2 {\nwidth: 100px;\n\n}',
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { height: "50px", width: "100px", background: 'var(--b-light)', borderRadius: '20px'},
            defaultCode: "width: 100px;",
            solution: { width: "100px", height: "120px" },
            viewSolution: 'height: 120px;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { height: "50px", width: "100px", background: 'var(--b-light)', borderRadius: '20px'},
            defaultCode: "width: 100px;",
            solution: { width: "100px", height: "200px" },
            viewSolution: 'height: 200px;'
          },
          {
            id: "blockParent",
            style: {
              paddingBottom: "50px",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: 'flex-end',
              justifyContent: 'center',
              gap: '50px'
            }
          }
        ],
        successMessage: "Awesome! Now you know how to control height."
      },
      // Sublevel 3: PADDING
      {
        id: 3,
        name: "padding",
        evaluatedBlocks: ["block1", "block2"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the padding property to both blocks so that each one matches the required spacing shown in the target layout.",
        theory: {
        description: [
          "The padding property adds space inside an element, between its content and its border.",
          "It helps create breathing room for content and improves readability.",
          "You can set padding individually for top, right, bottom, and left, or all sides at once.",
          "Proper use of padding improves the visual structure and spacing within an element.",
          "Padding affects the element’s total size unless `box-sizing` is adjusted."
        ],
        syntax: [
          "/* Same padding on all sides */\npadding: 20px;",
          "/* Vertical | Horizontal */\npadding: 10px 20px;",
          "/* Top | Right | Bottom | Left */\npadding: 5px 10px 15px 20px;",
          "/* Individual sides */\npadding-top: 10px;\npadding-right: 15px;\npadding-bottom: 10px;\npadding-left: 15px;"
        ]
      },
        blocks: [
          {
            id: "initialStylePlayground",
            defaultCode: "/* Block 1 */\n.block1 {\nwidth: 200px;\nheight: 50px;\n\n}\n\n/* Block 2 */\n.block2 {\nwidth: 200px;\nheight: 50px;\n\n}",
            blockChildrenInside: true,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { width: "200px", height: "50px", background: 'var(--b-light)'},
            defaultCode: "width: 200px;\nheight: 50px;",
            solution: { width: "200px", height: "50px", padding: "10px"},
            viewSolution: 'padding: 10px;',
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { width: "200px", height: "50px", background: 'var(--b-light)'},
            defaultCode: "width: 200px;\nheight: 50px;",
            solution: { width: "200px", height: "50px", padding: "25px 50px 0px 50px"},
            viewSolution: 'padding: 25px 50px 0px 50px;',
          },
          {
            id: "blockParent",
            style: {
              padding: "20px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
              justifyContent: 'center',
              gap: '100px'
            }
          },
          {
            id: "blockChildrenInside",
            style: {width: '100%', height: '100%', background: 'var(--highlight-yellow)',padding: '1px 5px', color: 'black', textAlign: 'center'},
            text: "content"
          }
        ],
        successMessage: "Well done! You now understand padding."
      },

      // Sublevel 4: MARGIN
      {
        id: 4,
        name: "margin",
        evaluatedBlocks: ["block1"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the margin property to Block 1 to replicate the spacing shown in the target layout. Use the shorthand syntax to set the right margin so that Block 1 is positioned correctly.",
        theory: {
        description: [
          "The margin property adds space outside an element, separating it from surrounding elements.",
          "It is essential for controlling spacing between elements and maintaining visual balance.",
          "Margins can collapse under certain conditions, so understanding margin behavior is important.",
          "You can set margins individually for top, right, bottom, and left, or all sides at once.",
          "Proper use of margin helps align elements and prevent overlapping or overcrowding."
        ],
        syntax: [
          "/* Same margin on all sides */\nmargin: 20px;",
          "/* Vertical | Horizontal */\nmargin: 10px 20px;",
          "/* Top | Right | Bottom | Left */\nmargin: 5px 10px 15px 20px;",
          "/* Individual sides */\nmargin-top: 10px;\nmargin-right: 15px;\nmargin-bottom: 10px;\nmargin-left: 15px;"
        ]
      },
        blocks: [
          {
            id: "initialStylePlayground",
            defaultCode: "/* Block 1 */\n.block1 {\nwidth: 150px;\nheight: 100px;\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { width: "150px", height: "100px", background: 'var(--b-light)', borderRadius: '20px' },
            defaultCode: "width: 150px;\nheight: 100px;\n",
            solution: { width: "150px", height: "100px", marginRight: '100px' },
            viewSolution: 'margin-right: 100px;'
          },
          {
            id: "block2",
            group: "group2",
            initialStyle: { width: "50px", height: "50px", background: 'var(--bg-secondary)', borderRadius: '20px' },
            defaultCode: "width: 150px;\nheight: 100px;\n",
            solution: { width: "50px", height: "50px", background: 'var(--bg-secondary)'},
            viewSolution: 'margin: 0px 0px 0px 250px;'
          },
          {
            id: "blockParent",
            style: {
              paddingBottom: "100px",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: 'flex-end',
              justifyContent: 'center'
            }
          }
        ],
        successMessage: "Excellent! You've mastered margins."
      },
      
      // Sublevel 5: BOX-SIZING
      {
        id: 5,
        name: "box-sizing",
        evaluatedBlocks: ["block1"],
        totalBlocks: ["block1", "block2"],
        challenge: "Apply the box-sizing property to Block 1 so that the element’s total width and height exactly match the values defined in the code, including padding and border.",
        theory: {
        description: [
          "The `box-sizing` property controls how the total width and height of an element are calculated.",
          "By default, elements use `content-box`, meaning width and height only apply to the content area, not padding or border.",
          "Changing box-sizing affects layout calculations and can simplify handling element sizes with padding and border.",
          "It is essential for creating predictable, maintainable layouts, especially in complex designs."
        ],
        syntax: [
          "/* Default */\nbox-sizing: content-box;",
          "/* Include padding and border in width/height */\nbox-sizing: border-box;",
          "/* Apply to all elements (common practice) */\n* {\n  box-sizing: border-box;\n}"
        ]
      },
        blocks: [
          {
            id: "initialStylePlayground",
            defaultCode: "/* Block 1 */\n.block1 {\nwidth: 100px;\nheight: 100px;\n\n}\n\n"
          },
          {
            id: "block1",
            group: "group1",
            initialStyle: { boxSizing: "content-box", width: "100px", height: "100px", background: 'var(--b-light)', borderRadius: '20px', border: '10px solid var(--highlight-yellow)' },
            defaultCode: "width: 100px;\nheight: 100px;\npadding: 20px;\nmargin: 10px;",
            solution: { width: "100px", height: "100px", boxSizing: "border-box" },
            viewSolution: 'box-sizing: border-box;'
          },
          {
            id: "blockParent",
            style: {
              padding: "20px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
              justifyContent: 'center',
              gap: '50px'
            }
          }
        ],
        successMessage: "Perfect! You understand how box-sizing works."
      }
    ]
  }
];


export default levels;
