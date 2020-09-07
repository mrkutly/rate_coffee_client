import styled from "styled-components";
import Link from "next/link";

const CoffeeCard = ({ coffee }) => {
  return (
    <Link href={`/coffees/${coffee.id}`}>
      <CardStyles>
        <img src={coffee.image} width="200" height="150" />
        <p>
          <strong>{Math.round(coffee.averageRating)}</strong> - {coffee.name}
        </p>
      </CardStyles>
    </Link>
  );
};

const CardStyles = styled.a`
  cursor: pointer;
  display: block;
  width: 300px;
  text-align: center;
  padding: 12px;
  border: 1px solid transparent;

  img {
    margin: 0 auto;
  }

  &:hover {
    border-color: var(--primary-300);
  }
`;

export default CoffeeCard;
