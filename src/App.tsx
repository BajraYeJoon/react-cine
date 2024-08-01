import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./routes/route";
import AnimatedCursor from "react-animated-cursor";

// import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";
// import type { IpadCursorConfig } from "ipad-cursor";

function App() {
  // const config: IpadCursorConfig = {};
  // const { customCursorStyle } = useIPadCursor();
  // const style =
  //   customCursorStyle &&
  //   customCursorStyle({
  //     durationBase: 2000,
  //   });

  return (
    <>
      <RouterProvider router={router} />
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="230, 151, 230"
        outerAlpha={0.4}
        innerScale={0.4}
        trailingSpeed={10}
        outerScale={5}
        clickables={[
          "a",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
    // <IPadCursorProvider config={config}>

    // <button
    //   data-cursor="block"
    //   data-cursor-style={style}
    //   className="cursor-none"
    // >
    //   Button
    // </button>
    // </IPadCursorProvider>
  );
}

export default App;
