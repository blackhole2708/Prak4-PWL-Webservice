
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('komentar').del()
    .then(function () {
      // Inserts seed entries
      return knex('komentar').insert([
        {id: 1, project_id: 1, username:'Ucok', komentar:'Bagus'},
        {id: 2, project_id: 1, username:'Butet', komentar:'Amazing'},
        {id: 3, project_id: 2, username:'Paijo', komentar:'WOW'}
      ]);
    });
};
