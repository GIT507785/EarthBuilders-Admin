import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { BalanceNode } from '../Balancesheet/TreesDta'
    
interface TreeNodeProps {
  node: BalanceNode;
  level?: number;
}

const TreeNode = ({ node, level = 0 }: TreeNodeProps) => {
  const [expanded, setExpanded] = useState(true);

  const hasChildren = node.children && node.children.length > 0;

  return (
    <>
      <div
        className={`flex items-center justify-between border-b border-gray-200 py-2 hover:bg-gray-50 ${
          node.total ? "font-bold bg-gray-100" : ""
        }`}
      >
        {/* Left Side */}
        <div
          className="flex items-center gap-2"
          style={{ paddingLeft: `${level * 24}px` }}
        >
          {hasChildren ? (
            <button onClick={() => setExpanded(!expanded)}>
              {expanded ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>
          ) : (
            <div className="w-[18px]" />
          )}

          <span>{node.title}</span>
        </div>

        {/* Right Side */}
        <div className="w-32 text-right">
          {node.amount !== undefined && (
            <span>${node.amount.toLocaleString()}</span>
          )}
        </div>
      </div>

      {/* Children */}
      {expanded &&
        hasChildren &&
        node.children!.map((child) => (
          <TreeNode
            key={child.id}
            node={child}
            level={level + 1}
          />
        ))}
    </>
  );
};

export default TreeNode;