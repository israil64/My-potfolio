import React from "react";

export default function Description() {
  return (
    <>
      <div class="w-full md:w-[350px] rounded-md border mt-2 absolute top-16 left-4 md:left-28 backdrop-blur-sm border-sky-400 shadow-white shadow-sm hover:animate-bounce">
        <div class="p-4">
          <p class="text-lg md:text-base leading-8 md:leading-7 text-white/85 font-semibold">
            I'm Israil. I'm a full-stack developer with expertise in HTML, CSS,
            and JavaScript, and I specialize in React.js for frontend
            development. On the backend, I work with Python and Django. I enjoy
            building web applications from start to finish and love tackling new
            challenges in web development.
          </p>
          <div class="mt-4">
            <span class="text-orange-500 mb-2 mr-2 inline-block rounded-full bg-black/5 px-3 py-1 text-xs md:text-[10px] font-semibold">
              #HTML&CSS
            </span>
            <span class="text-yellow-200 mb-2 mr-2 inline-block rounded-full px-3 py-1 text-xs md:text-[10px] font-semibold bg-black/5">
              #JAVASCRIPT
            </span>
            <span class="text-sky-300 mb-2 mr-2 inline-block rounded-full bg-black/5 px-3 py-1 text-xs md:text-[10px] font-semibold">
              #REACT JS
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
