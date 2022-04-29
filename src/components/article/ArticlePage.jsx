import React from "react";
import * as Images from "./../../assets/images";

const ArticlePage = () => {
  return (
    <>
      <div className="container mt-16 ">
        <img src={Images.Blog_1_Img} alt="" className="w-full max-h-96 object-cover" />
        <div className="my-10 mx-20 ">
          <div className="">
            <h1 className="text-6xl font-semibold">
              Finibus Bonorum et Malorum
            </h1>
            <div className="flex gap-5 my-5">
              <b className="">Written by John doe</b>
              <div className="">Monday May 20</div>
            </div>
          </div>
          <hr className=" border-black my-10"/>
          <div className="">
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?" 1914 translation
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
