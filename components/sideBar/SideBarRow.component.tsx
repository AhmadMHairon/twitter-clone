import React, { SVGProps } from "react";
import tw from "twin.macro";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

const Container = tw.div`
flex
items-center
space-x-2
px-4
py-3
rounded-full
hover:bg-gray-100 transition-all duration-200
cursor-pointer
`;

const Title = tw.p`
group-hover:text-twitter
`;

const SideBarRow = ({ Icon, title }: Props) => {
  return (
    <Container className="group max-w-fit">
      <Icon className="h-6 w-6"></Icon>
      <Title>{title}</Title>
    </Container>
  );
};

export default SideBarRow;
