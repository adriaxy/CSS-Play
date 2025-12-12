const levels = [
  {
    level: 1,
    name: "por definir",
    sublevels: [
      {
        id: 1,
        name: "1-1",
        evaluatedBlocks: ["block1", "block2"],
        challenge: "Apply the width property to both blocks so that each one matches the required width shown in the target layout.",
        theory: {
          description: [
            "The width property defines the horizontal size of an element's content area.",
            "It determines how wide the element appears on the page, without affecting the height.",
            "You can set width using various units like pixels (px), percentages (%), or relative units (em, rem).",
            "Using width properly helps control layout and alignment of elements."
          ],
          syntax: "width: 200px;"
        },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { width: "50px" },
            initialStyleBlock2: { width: "10px", height: "10px" },
            defaultCode: "/* Block 1 */\n.block1 {\nPRUEBA DAFAULT perdona? SUB 1\n}\n\n/* Block 2 */\n.block2 {\n\n}"
          },
          {
            id: "block1",
            defaultCode: "",
            expectedStyles: [{ property: "width", value: "200px", tolerance: 0 }],
            solution: { width: "150px" },
            solutionString: 'width: 150px;',
            completed: { background: 'var(--b-light)', borderRadius: '20px', height: "50px" },
            solutionCompleted: { width: "150px" }
          },
          {
            id: "block2",
            defaultCode: "",
            expectedStyles: [{ property: "width", value: "300px", tolerance: 0 }],
            solution: { width: "300px" },
            solutionString: 'width: 300px;',
            completed: { height: "50px", background: 'var(--b-light)', borderRadius: '20px' },
            solutionCompleted: { width: "300px" }
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
        id: 2,
        name: "1-2",
        evaluatedBlocks: ["block1", "block2"],
        challenge: "Apply the height property to both blocks so that each one matches the required height shown in the target layout.",
        theory: {
          description: [
            "The height property defines the vertical size of an element's content area.",
            "It determines how tall the element appears on the page, without affecting the width.",
            "You can assign height values in pixels, percentages, or relative units.",
            "Height is essential to control layout and spacing vertically."
          ],
          syntax: "height: 150px;"
        },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { height: "50px", width: "100px" }, 
            initialStyleBlock2: { width: "10px", height: "10px" },
            defaultCode: "/* Block 1 */\n.block1 {\nPRUEBA DAFAULT SUB 2 -ssssss HEIGHT\n}\n\n/* Block 2 */\n.block2 {\n\n}"
          },
          {
            id: "block1",
            defaultCode: "width: 100px;",
            expectedStyles: [{ property: "height", value: "120px", tolerance: 0 }],
            solution: { width: "100px", height: "120px" },
            solutionString: 'height: 120px;',
            completed: { background: 'var(--b-light)', borderRadius: '20px' },
            solutionCompleted: { height: "120px" }
          },
          {
            id: "block2",
            defaultCode: "width: 100px;",
            expectedStyles: [{ property: "height", value: "200px", tolerance: 0 }],
            solution: { width: "100px", height: "200px" },
            solutionString: 'height: 200px;',
            completed: { background: 'var(--b-light)', borderRadius: '20px' },
            solutionCompleted: { height: "200px" }
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
      {
        id: 3,
        name: "1-3",
        evaluatedBlocks: ["block1", "block2"],
        challenge: "Apply the padding property to both blocks so that each one matches the required spacing shown in the target layout.",
        theory: {
          description: [
            "The padding property adds space inside the element, between its content and its border.",
            "It helps create breathing room for content and improves readability.",
            "You can set padding individually for top, right, bottom, and left, or all sides at once.",
            "Proper use of padding improves the visual structure of your elements."
          ],
          syntax: "padding: 20px;"
        },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { padding: "20px" },
            initialStyleBlock2: { width: "10px", height: "10px" },
            defaultCode: "/* Block 1 */\n.block1 {\nPRUEBA DAFAULT SUB 3\n}\n\n/* Block 2 */\n.block2 {\n\n}"
          },
          {
            id: "block1",
            defaultCode: "width: 200px;\nheight: 150px;",
            expectedStyles: [{ property: "padding", value: "20px", tolerance: 0 }],
            solution: { width: "200px", height: "150px", padding: "20px" },
            solutionString: 'width: 200px;\nheight: 150px;\npadding: 20px;',
            completed: { background: 'var(--b-light)', borderRadius: '20px' },
            solutionCompleted: { width: "200px", height: "150px", padding: "20px" }
          },
          {
            id: "block2",
            defaultCode: "width: 300px;\nheight: 180px;",
            expectedStyles: [{ property: "padding", value: "15px", tolerance: 0 }],
            solution: { width: "300px", height: "180px", padding: "15px" },
            solutionString: 'width: 300px;\nheight: 180px;\npadding: 15px;',
            completed: { background: 'var(--b-light)', borderRadius: '20px' },
            solutionCompleted: { width: "300px", height: "180px", padding: "15px" }
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
        successMessage: "Well done! You now understand padding."
      }
    ]
  },
  {
    level: 2,
    name: "Dimensions and Spacing",
    sublevels: [
      // Sublevel 1: WIDTH
      {
        id: 1,
        name: "width",
        evaluatedBlocks: ["block1", "block2"],
        challenge: "Apply the width property to both blocks so that each one matches the required width shown in the target layout.",
        theory: {
          description: [
            "The width property defines the horizontal size of an element's content area.",
            "It determines how wide the element appears on the page, without affecting the height.",
            "You can set width using various units like pixels (px), percentages (%), or relative units (em, rem).",
            "Using width properly helps control layout and alignment of elements."
          ],
          syntax: "width: 200px;"
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
            defaultCode: "",
            expectedStyles: [{ property: "width", value: "150px", tolerance: 0 }],
            solution: { width: "150px" },
            solutionString: 'width: 150px;',
            completed: { background: 'var(--b-light)', borderRadius: '20px', height: "50px" },
            solutionCompleted: { width: "150px" }
          },
          {
            id: "block2",
            defaultCode: "",
            expectedStyles: [{ property: "width", value: "300px", tolerance: 0 }],
            solution: { width: "300px" },
            solutionString: 'width: 300px;',
            completed: { height: "50px", background: 'var(--b-light)', borderRadius: '20px' },
            solutionCompleted: { width: "300px" }
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
        challenge: "Apply the height property to both blocks so that each one matches the required height shown in the target layout.",
        theory: {
          description: [
            "The height property defines the vertical size of an element's content area.",
            "It determines how tall the element appears on the page, without affecting the width.",
            "You can assign height values in pixels, percentages, or relative units.",
            "Height is essential to control layout and spacing vertically."
          ],
          syntax: "height: 150px;"
        },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { height: "50px", width: "100px" }, 
            initialStyleBlock2: { height: "50px", width: "100px" }, 
            defaultCode: '/* Block 1 */\n.block1 {\nwidth: 100px;\n\n}\n\n/* Block 2 */\n.block2 {\nwidth: 100px;\n\n}',
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            defaultCode: "width: 100px;",
            expectedStyles: [{ property: "height", value: "120px", tolerance: 0 }],
            solution: { width: "100px", height: "120px" },
            solutionString: 'height: 120px;',
            completed: { background: 'var(--b-light)', borderRadius: '20px' },
            solutionCompleted: { height: "120px" }
          },
          {
            id: "block2",
            defaultCode: "width: 100px;",
            expectedStyles: [{ property: "height", value: "200px", tolerance: 0 }],
            solution: { width: "100px", height: "200px" },
            solutionString: 'height: 200px;',
            completed: { background: 'var(--b-light)', borderRadius: '20px' },
            solutionCompleted: { height: "200px" }
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
        challenge: "Apply the padding property to both blocks so that each one matches the required spacing shown in the target layout.",
        theory: {
          description: [
            "The padding property adds space inside the element, between its content and its border.",
            "It helps create breathing room for content and improves readability.",
            "You can set padding individually for top, right, bottom, and left, or all sides at once.",
            "Proper use of padding improves the visual structure of your elements."
          ],
          syntax: "padding: 20px;"
        },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { width: "200px", height: "50px" },
            initialStyleBlock2: { width: "200px", height: "50px" },    
            defaultCode: "/* Block 1 */\n.block1 {\nwidth: 200px;\nheight: 50px;\n\n}\n\n/* Block 2 */\n.block2 {\nwidth: 200px;\nheight: 50px;\n\n}",
            blockChildrenInside: true,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            defaultCode: "width: 200px;\nheight: 50px;",
            expectedStyles: [{ property: "padding", value: "10px", tolerance: 0 }],
            solution: { width: "200px", height: "50px", padding: "10px"},
            solutionString: 'padding: 10px;',
            completed: { background: 'var(--b-light)'},
            solutionCompleted: { width: "200px", height: "50px", padding: "10px" }
          },
          {
            id: "block2",
            defaultCode: "width: 200px;\nheight: 50px;",
            expectedStyles: [{ property: "padding", value: "25px 50px 0px 50px", tolerance: 0 }],
            solution: { width: "200px", height: "50px", padding: "25px 50px 0px 50px"},
            solutionString: 'padding: 25px 50px 0px 50px;',
            completed: { background: 'var(--b-light)'},
            solutionCompleted: { width: "200px", height: "50px", padding: "25px 50px 0px 50px"}
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
        challenge: "Apply margin property to block 1....",
        theory: {
          description: [
            "The margin property adds space outside the element, separating it from surrounding elements.",
            "It helps position elements and maintain visual balance.",
            "You can define margins for each side or all sides at once.",
            "Using margins correctly helps control layout spacing and alignment."
          ],
          syntax: "margin: 10px;"
        },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { width: "150px", height: "100px" },
            initialStyleBlock2: { width: "50px", height: "50px", background: 'var(--bg-secondary)' },
            defaultCode: "/* Block 1 */\n.block1 {\nwidth: 150px;\nheight: 100px;\n\n}",
            blockChildrenInside: false,
            blockChildrenOutside: false
          },
          {
            id: "block1",
            defaultCode: "width: 150px;\nheight: 100px;\n",
            // expectedStyles: [{ property: "margin", value: "50px", tolerance: 0 }],
            solution: { width: "150px", height: "100px", marginRight: '100px' },
            solutionString: 'margin-right: 100px',
            completed: { background: 'var(--b-light)', borderRadius: '20px'},
            solutionCompleted: { width: "150px", height: "100px", marginRight: '100px'  }
          },
          {
            id: "block2",
            defaultCode: "width: 150px;\nheight: 100px;\n",
            // expectedStyles: [{ property: "margin", value: "0px 0px 0px 250px", tolerance: 0 }],
            solution: { width: "50px", height: "50px", background: 'var(--bg-secondary)'},
            solutionString: 'margin: 0px 0px 0px 250px',
            completed: { background: 'var(--bg-secondary)', borderRadius: '20px'}
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
      // {
      //   id: 4,
      //   name: "margin",
      //   challenge: "Apply margin property to each block so they are positioned correctly inside their parent container. The spacing is measured relative to the parent, not between the blocks.",
      //   theory: {
      //     description: [
      //       "The margin property adds space outside the element, separating it from surrounding elements.",
      //       "It helps position elements and maintain visual balance.",
      //       "You can define margins for each side or all sides at once.",
      //       "Using margins correctly helps control layout spacing and alignment."
      //     ],
      //     syntax: "margin: 10px;"
      //   },
      //   blocks: [
      //     {
      //       id: "initialStylePlayground",
      //       initialStyleBlock1: { width: "150px", height: "100px"},

      //       defaultCode: "/* Block 1 */\n.block1 {\nwidth: 150px;\nheight: 100px;\n\n}\n\n/* Block 2 */\n.block2 {\nwidth: 150px;\nheight: 100px;\n\n}",
      //       blockChildrenInside: false,
      //       blockChildrenOutside: false
      //     },
      //     {
      //       id: "block1",
      //       defaultCode: "width: 150px;\nheight: 100px;\n",
      //       expectedStyles: [{ property: "margin", value: "50px", tolerance: 0 }],
      //       solution: { width: "150px", height: "100px", margin: '50px' },
      //       solutionString: 'margin: 50px',
      //       completed: { background: 'var(--b-light)', borderRadius: '20px'},
      //       solutionCompleted: { width: "150px", height: "100px", margin: '50px'  }
      //     },
      //     {
      //       id: "block2",
      //       defaultCode: "width: 150px;\nheight: 100px;\n",
      //       expectedStyles: [{ property: "margin", value: "0px 0px 0px 250px", tolerance: 0 }],
      //       solution: { width: "150px", height: "100px", margin: '0px 0px 0px 250px'},
      //       solutionString: 'margin: 0px 0px 0px 250px',
      //       completed: { background: 'var(--b-light)', borderRadius: '20px'},
      //       solutionCompleted: { width: "150px", height: "100px", margin: '0px 0px 0px 250px' }
      //     },
      //     {
      //       id: "blockParent",
      //       style: {
      //         padding: "0px",
      //         height: "100%",
      //         display: "flex",
      //         flexDirection: "column",
      //         alignItems: 'flex-start',
      //         justifyContent: 'space-between',
      //       }
      //     }
      //   ],
      //   successMessage: "Excellent! You've mastered margins."
      // },

      // Sublevel 5: BOX-SIZING
      {
        id: 5,
        name: "box-sizing",
        evaluatedBlocks: ["block1", "block2"],
        challenge: "Apply the box-sizing property to both blocks to ensure the element's total width and height includes padding and border as shown in the target layout.",
        theory: {
          description: [
            "The box-sizing property changes how the total width and height of an element are calculated.",
            "With box-sizing: border-box, padding and border are included inside the width and height you set.",
            "It helps prevent elements from growing unexpectedly when adding padding or borders.",
            "Using box-sizing improves consistency in layout sizing."
          ],
          syntax: "box-sizing: border-box;"
        },
        blocks: [
          {
            id: "initialStylePlayground",
            initialStyleBlock1: { boxSizing: "border-box" },
            initialStyleBlock2: { width: "10px", height: "10px" },     
            defaultCode: "/* Block 1 */\n.block1 {\nPRUEBA DAFAULT SUB 5\n}\n\n/* Block 2 */\n.block2 {\n\n}"
          },
          {
            id: "block1",
            defaultCode: "width: 200px;\nheight: 150px;\npadding: 20px;\nmargin: 10px;",
            expectedStyles: [{ property: "box-sizing", value: "border-box", tolerance: 0 }],
            solution: { width: "200px", height: "150px", padding: "20px", margin: "10px", boxSizing: "border-box" },
            solutionString: 'width: 200px;\nheight: 150px;\npadding: 20px;\nmargin: 10px;\nbox-sizing: border-box;',
            completed: { background: 'var(--b-light)', borderRadius: '20px' },
            solutionCompleted: { width: "200px", height: "150px", padding: "20px", margin: "10px", boxSizing: "border-box" }
          },
          {
            id: "block2",
            defaultCode: "width: 300px;\nheight: 180px;\npadding: 15px;\nmargin: 15px;",
            expectedStyles: [{ property: "box-sizing", value: "border-box", tolerance: 0 }],
            solution: { width: "300px", height: "180px", padding: "15px", margin: "15px", boxSizing: "border-box" },
            solutionString: 'width: 300px;\nheight: 180px;\npadding: 15px;\nmargin: 15px;\nbox-sizing: border-box;',
            completed: { background: 'var(--b-light)', borderRadius: '20px' },
            solutionCompleted: { width: "300px", height: "180px", padding: "15px", margin: "15px", boxSizing: "border-box" }
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
