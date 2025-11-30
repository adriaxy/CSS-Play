const levels = [
  {
    level: 2,
    name: "Dimensions and Spacing",
    sublevels: [
      // Sublevel 1: WIDTH
      {
        id: 1,
        name: "width",
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
            style: {width: "60px"}
          },
          {
            id: "block1",
            defaultCode: "",
            expectedStyles: [
              { property: "width", value: "200px", tolerance: 0 }
            ],
            solution: {width: "120px"},
            solutionString: '\n.block1 {\n\n}\n\n/* Block 2 */\n.block2 {\n\n}',
            completed: {background: 'var(--b-light)', borderRadius: '20px', height: "60px"}
          },
          {
            id: "block2",
            defaultCode: "",
            expectedStyles: [
              { property: "width", value: "300px", tolerance: 0 }
            ],
            solution: {width: "250px"},
            completed: {height: "60px", background: 'var(--b-light)', borderRadius: '20px'}
          },
          {
            id: "blockParent",
            style: {padding: "20px", height: "100%", display: "flex", flexDirection: "column",
              alignItems: 'center', justifyContent: 'center', gap: '50px'
            }
          }
        ],
        successMessage: "Great! You've learned how width works."
      },

      // Sublevel 2: HEIGHT
      {
        id: 2,
        name: "height",
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
            id: "block1",
            defaultCode: "width: 200px;",
            expectedStyles: [
              { property: "height", value: "150px", tolerance: 0 }
            ],
            solution: ["width: 200px;", "height: 150px;"]
          },
          {
            id: "block2",
            defaultCode: "width: 300px;",
            expectedStyles: [
              { property: "height", value: "180px", tolerance: 0 }
            ],
            solution: ["width: 300px;", "height: 180px;"]
          }
        ],
        successMessage: "Awesome! Now you know how to control height."
      },

      // Sublevel 3: PADDING
      {
        id: 3,
        name: "padding",
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
            id: "block1",
            defaultCode: "width: 200px;\nheight: 150px;",
            expectedStyles: [
              { property: "padding", value: "20px", tolerance: 0 }
            ],
            solution: ["width: 200px;", "height: 150px;", "padding: 20px;"]
          },
          {
            id: "block2",
            defaultCode: "width: 300px;\nheight: 180px;",
            expectedStyles: [
              { property: "padding", value: "15px", tolerance: 0 }
            ],
            solution: ["width: 300px;", "height: 180px;", "padding: 15px;"]
          }
        ],
        successMessage: "Well done! You now understand padding."
      },

      // Sublevel 4: MARGIN
      {
        id: 4,
        name: "margin",
        challenge: "Apply the margin property to both blocks so that each one matches the required spacing from other elements shown in the target layout.",
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
            id: "block1",
            defaultCode: "width: 200px;\nheight: 150px;\npadding: 20px;",
            expectedStyles: [
              { property: "margin", value: "10px", tolerance: 0 }
            ],
            solution: ["width: 200px;", "height: 150px;", "padding: 20px;", "margin: 10px;"]
          },
          {
            id: "block2",
            defaultCode: "width: 300px;\nheight: 180px;\npadding: 15px;",
            expectedStyles: [
              { property: "margin", value: "15px", tolerance: 0 }
            ],
            solution: ["width: 300px;", "height: 180px;", "padding: 15px;", "margin: 15px;"]
          }
        ],
        successMessage: "Excellent! You've mastered margins."
      },

      // Sublevel 5: BOX-SIZING
      {
        id: 5,
        name: "box-sizing",
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
            id: "block1",
            defaultCode: "width: 200px;\nheight: 150px;\npadding: 20px;\nmargin: 10px;",
            expectedStyles: [
              { property: "box-sizing", value: "border-box", tolerance: 0 }
            ],
            solution: ["width: 200px;", "height: 150px;", "padding: 20px;", "margin: 10px;", "box-sizing: border-box;"]
          },
          {
            id: "block2",
            defaultCode: "width: 300px;\nheight: 180px;\npadding: 15px;\nmargin: 15px;",
            expectedStyles: [
              { property: "box-sizing", value: "border-box", tolerance: 0 }
            ],
            solution: ["width: 300px;", "height: 180px;", "padding: 15px;", "margin: 15px;", "box-sizing: border-box;"]
          }
        ],
        successMessage: "Perfect! You understand how box-sizing works."
      }
    ]
  }
];

export default levels;
