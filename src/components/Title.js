import React from "react"
import Tsenher from "../assets/Blueee.jpg"
import Ulaan from "../assets/Redd.jpg"
import Nogoon from "../assets/Green.jpg"
const Title = () =>{
   const data = [
     {
       id1: 1,
       title: "Title1",
       img: Tsenher,
       description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie ut velit et tempus. Vestibulum ultricies nulla sagittis ultrices tristique. Proin purus libero, semper eu leo eget, semper gravida nibh. Fusce sit amet nisl tincidunt, placerat justo at, facilisis nunc. In ac nulla mauris. Vestibulum ut tincidunt magna. Proin eu dui posuere, euismod augue eu, vulputate arcu.",
     },
     {
       id2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie ut velit et tempus. Vestibulum ultricies nulla sagittis ultrices tristique. Proin purus libero, semper eu leo eget, semper gravida nibh. Fusce sit amet nisl tincidunt, placerat justo at, facilisis nunc. In ac nulla mauris. Vestibulum ut tincidunt magna. Proin eu dui posuere, euismod augue eu, vulputate arcu.",
       title: "Title2",
       img: Ulaan,
       description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie ut velit et tempus. Vestibulum ultricies nulla sagittis ultrices tristique. Proin purus libero, semper eu leo eget, semper gravida nibh. Fusce sit amet nisl tincidunt, placerat justo at, facilisis nunc. In ac nulla mauris. Vestibulum ut tincidunt magna. Proin eu dui posuere, euismod augue eu, vulputate arcu.",
     },
     {
       id3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie ut velit et tempus. Vestibulum ultricies nulla sagittis ultrices tristique. Proin purus libero, semper eu leo eget, semper gravida nibh. Fusce sit amet nisl tincidunt, placerat justo at, facilisis nunc. In ac nulla mauris. Vestibulum ut tincidunt magna. Proin eu dui posuere, euismod augue eu, vulputate arcu.",
       title: "Title3",
       img: Nogoon,
       description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie ut velit et tempus. Vestibulum ultricies nulla sagittis ultrices tristique. Proin purus libero, semper eu leo eget, semper gravida nibh. Fusce sit amet nisl tincidunt, placerat justo at, facilisis nunc. In ac nulla mauris. Vestibulum ut tincidunt magna. Proin eu dui posuere, euismod augue eu, vulputate arcu.",
     },
   ];
  return (
    <div>
      <div className="flex">
        {data.map((row) => (
          <div>
            <h1 className="">{row.title}</h1>
            <img className="w-[300px] h-[150px]"   src={row.img} alt="" />
            <p>{row.description}</p>
            <p>{row.id2}</p>
            <p>{row.id3}</p>
          </div>
        ))}
      </div>
    </div>
  );
 }
 export default Title