import * as React from "react";

function IconEdit2(props) {
  return (
    <svg className="mr-1"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="23px"
      width="23px"
      style={{ cursor: 'pointer' }}
      {...props}
    >
      <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  );
}

export default IconEdit2;
