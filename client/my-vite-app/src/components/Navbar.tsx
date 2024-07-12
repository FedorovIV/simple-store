import styled from "styled-components";

const Li = styled.li`
    font-size: '13rem';
    transition: 'font-size 0.2s';
    cursor: pointer;
    &:hover{
      transform: scale(1.1);
      margin-left:10px;
    }
`;

const Navbar = () => {
  return (
    <div className=" bg-gray-900 text-white p-4 fixed top-0 left-0 h-full flex justify-left items-center z-40  w-48 ">
      <ul className="flex flex-col">
        <li className="text-xl mb-2">Brands:</li>
        <Li>Adidas</Li>
        <Li>Nike</Li>
        <Li>Puma</Li>
        <Li>Valentino</Li>
        <Li>Loewe</Li>
        <Li>Bottega Veneta</Li>
        <Li>Dolce & Gabbana</Li>
        <Li>Versace</Li>
        <Li>Gucci</Li>
        <div className="bg-gray-500 h-1 my-2 w-36"></div>
        <li className="text-xl mt-2 mb-2">Categories:</li>
        <Li>Sneakers</Li>
        <Li>T-shirts</Li>
        <Li>Pants</Li>
        <Li>Jackets</Li>
      </ul>
    </div>
  );
};

export default Navbar;
