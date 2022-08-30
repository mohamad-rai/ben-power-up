const setBadge = t =>
  t.card('coordinates').then(card => {
    console.log(card);
    return [];
  });

window.TrelloPowerUp.initialize({
  // return an array of card badges for the given card
  'card-badges': t => setBadge(t),
  // return an array of card badges for the given card
  'card-detail-badges': t => setBadge(t),
});