import React from "react";
import { Button } from "./ui/button";
import { CodeIcon } from "lucide-react";

const SidebarNav = () => {
  return (
    <aside className="flex flex-col border-r bg-background p-4 sm:p-6">
      <div className="mt-4 flex-1 overflow-auto">
        <div className="grid gap-2">
          <Button variant="ghost" className="justify-start">
            <CodeIcon className="mr-2 h-4 w-4" />
            Bubble Sort
          </Button>
          <Button variant="ghost" className="justify-start">
            <CodeIcon className="mr-2 h-4 w-4" />
            Merge Sort
          </Button>
          <Button variant="ghost" className="justify-start">
            <CodeIcon className="mr-2 h-4 w-4" />
            Quick Sort
          </Button>
          <Button variant="ghost" className="justify-start">
            <CodeIcon className="mr-2 h-4 w-4" />
            Binary Search
          </Button>
          <Button variant="ghost" className="justify-start">
            <CodeIcon className="mr-2 h-4 w-4" />
            Depth-First Search
          </Button>
          <Button variant="ghost" className="justify-start">
            <CodeIcon className="mr-2 h-4 w-4" />
            Breadth-First Search
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default SidebarNav;
