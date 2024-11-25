import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // Récupérer les données de l'API
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUsers(response.data); // Enregistrer les données dans l'état
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      });
  }, []); // Le tableau vide assure que l'effet est exécuté une seule fois

  return (
    <div style={{ padding: '20px' }}>
      <h1>Liste des Utilisateurs</h1>
      {listOfUsers.length > 0 ? (
        <ul>
          {listOfUsers.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>Chargement des utilisateurs...</p>
      )}
    </div>
  );
};

export default UserList;
