
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profile').del()
    .then(function () {
      // Inserts seed entries
      return knex('profile').insert([
        {id: 1, username: 'Hasiholan Owen Ambarita', text:"Motivasi untuk menuangkan ide dalam sebuah aplikasi menjadikan saya semangat untuk belajar dunia IT. Semoga saya dapat berguna bagi masyarakat dalam bidang IT.",text_cv:'CV', link_cv:'https://bit.ly/CV-Hasiholan-Owen-Ambarita',text_github:'Github',link_github:'https://github.com/blackhole2708'}
      ]);
    });
};
