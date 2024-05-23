/* eslint-disable react/prop-types */
export const ListaItems = ({ lista }) => {
  return (
    <>
      <ul className="list w-full self-center">
        {lista.items.map((item, index) => {
          return (
            <li key={index}>
              <p>{item}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
