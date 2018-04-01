/*
 *local stored versions of teacher data incase of error with db retreival
 *
 */


var examples = {
  "thislittlepiggyhadnone": '[{"id":"00","text":"Clause","x":600,"y":15,"parent":"none","isLeaf":false,"tWidth":0,"depth":0,"kids":[{"id":"id1.5","text":"Participant 1","x":480,"y":75,"parent":"Clause","isLeaf":false,"tWidth":0,"depth":1,"kids":[{"id":"id2.5","text":"This Little Piggy","x":480,"y":135,"parent":"Participant 1","isLeaf":true,"tWidth":0,"depth":2,"kids":[]}]},{"id":"id3.5","text":"Process","x":600,"y":75,"parent":"Clause","isLeaf":false,"tWidth":0,"depth":1,"kids":[{"id":"id4.5","text":"Had","x":600,"y":135,"parent":"Process","isLeaf":true,"tWidth":0,"depth":2,"kids":[]}]},{"id":"id5.5","text":"Participant 2","x":720,"y":75,"parent":"Clause","isLeaf":false,"tWidth":0,"depth":1,"kids":[{"id":"id6.5","text":"None","x":720,"y":135,"parent":"Participant 2","isLeaf":true,"tWidth":0,"depth":2,"kids":[]}]}]}]',
  "agoodpersonforthejob": '[{"id":"00","text":"Clause","x":500,"y":12.5,"parent":"none","isLeaf":false,"tWidth":0,"depth":0,"kids":[{"id":"id1.5","text":"dd","x":350,"y":62.5,"parent":"Clause","isLeaf":false,"tWidth":0,"depth":1,"kids":[{"id":"id2.5","text":"A","x":350,"y":200,"parent":"dd","isLeaf":true,"tWidth":0,"depth":2,"kids":[]}]},{"id":"id3.5","text":"m/Adgjp","x":500,"y":62.5,"parent":"Clause","isLeaf":false,"tWidth":0,"depth":1,"kids":[{"id":"id4.5","text":"a","x":450,"y":112.5,"parent":"m/Adgjp","isLeaf":false,"tWidth":0,"depth":2,"kids":[{"id":"id5.5","text":"good","x":450,"y":200,"parent":"a","isLeaf":true,"tWidth":0,"depth":3,"kids":[]}]},{"id":"id6.5","text":"sc/Pgp","x":550,"y":112.5,"parent":"m/Adgjp","isLeaf":false,"tWidth":0,"depth":2,"kids":[{"id":"id7.5","text":"for the job","x":550,"y":200,"parent":"sc/Pgp","isLeaf":true,"tWidth":0,"depth":3,"kids":[]}]}]},{"id":"id8.5","text":"th","x":650,"y":62.5,"parent":"Clause","isLeaf":false,"tWidth":0,"depth":1,"kids":[{"id":"id9.5","text":"person","x":650,"y":200,"parent":"th","isLeaf":true,"tWidth":0,"depth":2,"kids":[]}]}]}]',
  "canyoubelievethat": '[{"id":"00","text":"Clause","x":500,"y":12.5,"parent":"none","isLeaf":false,"tWidth":0,"depth":0,"kids":[{"id":"id1.5","text":"Pr:mental | Vgp","x":400,"y":62.5,"parent":"Clause","isLeaf":false,"tWidth":0,"depth":1,"kids":[{"id":"id2.5","text":"F/Aux","x":350,"y":112.5,"parent":"Pr:mental | Vgp","isLeaf":false,"tWidth":0,"depth":2,"kids":[{"id":"id3.5","text":"Can","x":350,"y":162.5,"parent":"F/Aux","isLeaf":true,"tWidth":0,"depth":3,"kids":[]}]},{"id":"id4.5","text":"E","x":450,"y":112.5,"parent":"Pr:mental | Vgp","isLeaf":false,"tWidth":0,"depth":2,"kids":[{"id":"id5.5","text":"believe","x":450,"y":162.5,"parent":"E","isLeaf":true,"tWidth":0,"depth":3,"kids":[]}]}]},{"id":"id6.5","text":"Senser/Subject | Ngp","x":550,"y":62.5,"parent":"Clause","isLeaf":false,"tWidth":0,"depth":1,"kids":[{"id":"id7.5","text":"th","x":550,"y":112.5,"parent":"Senser/Subject | Ngp","isLeaf":false,"tWidth":0,"depth":2,"kids":[{"id":"id8.5","text":"you","x":550,"y":162.5,"parent":"th","isLeaf":true,"tWidth":0,"depth":3,"kids":[]}]}]},{"id":"id9.5","text":"Phenonenon/Complement | Ngp","x":650,"y":62.5,"parent":"Clause","isLeaf":false,"tWidth":0,"depth":1,"kids":[{"id":"id10.5","text":"th","x":650,"y":112.5,"parent":"Phenonenon/Complement | Ngp","isLeaf":false,"tWidth":0,"depth":2,"kids":[{"id":"id11.5","text":"that","x":650,"y":162.5,"parent":"th","isLeaf":true,"tWidth":0,"depth":3,"kids":[]}]}]}]}]',
  "it'sabout6(hours)am": '[{"id":"00","text":"Sentence","x":500,"y":12.5,"parent":"none","isLeaf":false,"tWidth":0,"depth":0,"kids":[{"id":"id1.5","text":"identified/subject/theme","x":155.3125,"y":67.65,"parent":"Sentence","isLeaf":false,"tWidth":178.48333740234375,"depth":1,"kids":[{"id":"id2.5","text":"th","x":155.3125,"y":122.80000000000001,"parent":"identified/subject/theme","isLeaf":false,"tWidth":15.699999809265137,"depth":2,"kids":[{"id":"id3.5","text":"it","x":155.3125,"y":233.10000000000002,"parent":"th","isLeaf":true,"tWidth":10.133333206176758,"depth":3,"kids":[]}]}]},{"id":"id4.5","text":"Pr:Relational","x":293.1875,"y":67.65,"parent":"Sentence","isLeaf":false,"tWidth":91.61666870117188,"depth":1,"kids":[{"id":"id5.5","text":"F/E","x":293.1875,"y":122.80000000000001,"parent":"Pr:Relational","isLeaf":false,"tWidth":23.53333282470703,"depth":2,"kids":[{"id":"id6.5","text":"\'s","x":293.1875,"y":233.10000000000002,"parent":"F/E","isLeaf":true,"tWidth":12.800000190734863,"depth":3,"kids":[]}]}]},{"id":"id7.5","text":"identifier/complement","x":637.875,"y":67.65,"parent":"Sentence","isLeaf":false,"tWidth":159.98333740234375,"depth":1,"kids":[{"id":"id8.5","text":"qd | Qtgp","x":500,"y":122.80000000000001,"parent":"identifier/complement","isLeaf":false,"tWidth":70.28333282470703,"depth":2,"kids":[{"id":"id9.5","text":"ad","x":431.0625,"y":177.95000000000002,"parent":"qd | Qtgp","isLeaf":false,"tWidth":19.03333282470703,"depth":3,"kids":[{"id":"id10.5","text":"about","x":431.0625,"y":233.10000000000002,"parent":"ad","isLeaf":true,"tWidth":42.71666717529297,"depth":4,"kids":[]}]},{"id":"id11.5","text":"am","x":568.9375,"y":177.95000000000002,"parent":"qd | Qtgp","isLeaf":false,"tWidth":23.133333206176758,"depth":3,"kids":[{"id":"id12.5","text":"6","x":568.9375,"y":233.10000000000002,"parent":"am","isLeaf":true,"tWidth":10.883333206176758,"depth":4,"kids":[]}]}]},{"id":"id13.5","text":"th","x":706.8125,"y":122.80000000000001,"parent":"identifier/complement","isLeaf":false,"tWidth":15.699999809265137,"depth":2,"kids":[{"id":"id14.5","text":"(hours)","x":706.8125,"y":233.10000000000002,"parent":"th","isLeaf":true,"tWidth":52.849998474121094,"depth":3,"kids":[]}]},{"id":"id15.5","text":"q","x":844.6875,"y":122.80000000000001,"parent":"identifier/complement","isLeaf":false,"tWidth":10.449999809265137,"depth":2,"kids":[{"id":"id16.5","text":"am","x":844.6875,"y":233.10000000000002,"parent":"q","isLeaf":true,"tWidth":23.133333206176758,"depth":3,"kids":[]}]}]}]}]'
}

module.exports = {
  examples
};