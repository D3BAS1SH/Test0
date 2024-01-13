import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import FWPIC from "./myReqs/20230822_123712.jpg"
import IFPIC from "./myReqs/20231124_172144.jpg"
import TAPIC from "./myReqs/IMG_20230820_131024.jpg"
import NMPIC from "./myReqs/20230812_124906.jpg"
import ITPIC from "./myReqs/20231106_230439.jpg"

//Method 1

/* const BOOK1 = {
  pic:FWPIC,
  title:"FOURTH WING",
  aut:"REBECCA YARROS",
};
const BOOK2 = {
  pic:IFPIC,
  title:"IRON FLAME",
  aut:"REBECCA YARROS",
};
const BOOK3 = {
  pic:TAPIC,
  title:"THE ALCHEMIST",
  aut:"PAULO COELHO",
};
const BOOK4 = {
  pic:NMPIC,
  title:"NO MATTER WHAT I WILL ALWAYS LOVE YOU",
  aut:"ROHIT DAWESAR",
};
const BOOK5 = {
  pic:ITPIC,
  title:"IN THE PRESENCE OF ABSENCE",
  aut:"MOHOMMUD DARWISH",
}; */

//Method 2

const BOOKS = [
  {
    pic: FWPIC,
    title: "FOURTH WING",
    aut: "REBECCA YARROS",
    id: 1,
  },
  {
    pic: IFPIC,
    title: "IRON FLAME",
    aut: "REBECCA YARROS",
    id: 2,
  },
  {
    pic: TAPIC,
    title: "THE ALCHEMIST",
    aut: "PAULO COELHO",
    id: 3,
  },
  {
    pic: NMPIC,
    title: "NO MATTER WHAT I WILL ALWAYS LOVE YOU",
    aut: "ROHIT DAWESAR",
    id: 4,
  },
  {
    pic: ITPIC,
    title: "IN THE PRESENCE OF ABSENCE",
    aut: "MOHOMMUD DARWISH",
    id: 5,
  },
];

const BookList = () => {
  return (
    <section className="FlexADD">
      {
      
      //Method 1

      /* 
      <Book IMG={BOOK1.pic} TITLE={BOOK1.title} AUTHOR={BOOK1.aut}/>
      <Book IMG={BOOK2.pic} TITLE={BOOK2.title} AUTHOR={BOOK2.aut}/>
      <Book IMG={BOOK3.pic} TITLE={BOOK3.title} AUTHOR={BOOK3.aut}/>
      <Book IMG={BOOK4.pic} TITLE={BOOK4.title} AUTHOR={BOOK4.aut}/>
      <Book IMG={BOOK5.pic} TITLE={BOOK5.title} AUTHOR={BOOK5.aut}/> */
      
      }

      {
      
        //Method 2

        BOOKS.map((BK)=>{
          const {/* pic,title,aut, */id} = BK;

          //Method 1 : as sending the Object one by one
          /* return <Book IMG={pic} TITLE = {title} AUTHOR = {aut} key={id}/> */

          //Method 2 : Sending the Whole Object And later Destructering.
          /* return <Book book = {BK} key={id}/> */

          //Method 3:
          return <Book {...BK} key={id}/>
        })
      }
    </section>
  );
};

//Method 1

/* const Book = (props) => {
  console.log(props);
  return (
    <article className="CardClass">
      <div className="ImgHolder">
        <Image img={props.IMG} title={props.TITLE} auth={props.AUTHOR} />
      </div>
      <div className="makeitDown">
        <Title title={props.TITLE} />
        <Author author={props.AUTHOR} />
      </div>
    </article>
  );
}; */

//Method 2

const Book = (/*Method 1:Destructuring : {book:{pic,title,aut}} */props) => {
  //Method 2 : take the parameter as object and then destructure it.
  const {pic,title, aut}=props;

  console.log(pic+","+title+","+aut);
  return (

    //Method : Setting Values from the destructured Parameter.

    <article className="CardClass">
      <div className="ImgHolder">
        <Image img={pic} title={title} auth={aut} />
      </div>
      <div className="makeitDown">
        <Title title={title} />
        <Author author={aut} />
      </div>
    </article>
  );
};

const Image = (props) => {
  return (
    <img src={props.img} alt={props.title+" BY "+props.auth} width={300} height={300} />
  );
};
const Title = (props) => {
  return <h4>{props.title}</h4>;
};
const Author = (props) => {
  return <h1>{props.author}</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
