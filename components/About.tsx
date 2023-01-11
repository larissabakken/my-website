import React from 'react';

const picture =
  'https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';

export const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-6">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p>About</p>
          <h2>Who I Am</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            quo fuga dolores consequatur, necessitatibus ab id voluptate porro
            ducimus deleniti aperiam magnam itaque amet sequi sint, minus
            quibusdam officia molestiae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            quo fuga dolores consequatur, necessitatibus ab id voluptate porro
            ducimus deleniti aperiam magnam itaque amet sequi sint, minus
            quibusdam officia molestiae!
          </p>
        </div>
        <div>
          <img
            src={picture}
            alt="Larissa"
          />
        </div>
      </div>
    </div>
  );
};
