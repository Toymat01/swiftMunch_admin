import React from "react";
import MenuCard from "@/components/ui/card/Menu"
import pasta_img from "../../../../public/images/pasta_img.png"

const Menu = () => {
  return <div className="mt-10 ">
    <h2 className="text-xl mb-10 text-grey3 font-bold">  Categories</h2>

    <div className="menus grid grid-cols-4 items-center gap-x-11 gap-y-10 mb-20">
      <MenuCard menu_name="Burgers & Fast food" extra_class="basis-[22%]" resturants_number={21} menu_img={pasta_img} />
      <MenuCard menu_name="Pasta & Casuals" extra_class="basis-[22%]" resturants_number={4} menu_img={pasta_img} />
      <MenuCard menu_name="Salads" extra_class="basis-[22%]" resturants_number={10} menu_img={pasta_img} />
      <MenuCard menu_name="Sandwich" extra_class="basis-[22%]" resturants_number={5} menu_img={pasta_img} />
      <MenuCard menu_name="Pizza" extra_class="basis-[22%]" resturants_number={4} menu_img={pasta_img} />
      <MenuCard menu_name="Soups" extra_class="basis-[22%]" resturants_number={32} menu_img={pasta_img} />
    </div>
  </div>;
};

export default Menu;
