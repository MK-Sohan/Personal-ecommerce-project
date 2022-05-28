import React from "react";
import "./Loading.css";
const Loading = () => {
  return (
    <div class="loader" style="--animationSpeed: 2s; --circlesCount: 7">
      <div class="circle" style="--color: #240046; --index: 0"></div>
      <div class="circle" style="--color: #3c096c; --index: 1"></div>
      <div class="circle" style="--color: #5a189a; --index: 2"></div>
      <div class="circle" style="--color: #7b2cbf; --index: 3"></div>
      <div class="circle" style="--color: #9d4edd; --index: 4"></div>
      <div class="circle" style="--color: #c77dff; --index: 5"></div>
      <div class="circle" style="--color: #e0aaff; --index: 6"></div>
    </div>
  );
};

export default Loading;
