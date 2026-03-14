export const openings = [
  {
    "id": "ruy-lopez",
    "group": "Open Games",
    "name": "Ruy Lopez",
    "description": "One of the oldest and most classical openings, controlling the center while pressuring Black's e5 pawn.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn Opening. White immediately stakes a claim in the center, opens lines for the bishop and queen, and prepares to castle kingside. This is one of the most aggressive and direct first moves in chess."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black mirrors White's pawn in the center, establishing symmetry and fighting for equal space. This is the classical response, leading to open games where both sides battle for control of the center squares."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — White develops the knight to its best square, attacking the e5 pawn and controlling d4 and g5. This natural developing move applies immediate pressure and follows the principle: develop with threats."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nc6 — Black defends the e5 pawn while developing a piece. The knight on c6 is well-placed, controlling the center squares d4 and e5. This is the most natural and common response."
      },
      {
        "san": "Bb5",
        "fen": "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
        "commentary": "Bb5 — the defining move of the Ruy Lopez! The bishop pins the knight against the king, indirectly attacking the e5 pawn. If the knight moves, e5 falls. This subtle positional pressure is the hallmark of the Spanish Game."
      },
      {
        "san": "a6",
        "fen": "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
        "commentary": "a6 — the Morphy Defense, the most popular response. Black challenges the bishop immediately, forcing it to declare its intentions. This gains space on the queenside and asks: will White retreat, exchange, or sacrifice?"
      },
      {
        "san": "Ba4",
        "fen": "r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 4",
        "commentary": "Ba4 — White retreats the bishop to maintain the pin. The bishop on a4 still eyes the c6 knight and supports the d4 pawn break. White keeps the tension rather than exchanging the powerful bishop."
      },
      {
        "san": "Nf6",
        "fen": "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5",
        "commentary": "Nf6 — Black counter-attacks the e4 pawn! This aggressive move develops the knight to its ideal square while creating immediate threats. The position is now rich with tactical and strategic possibilities for both sides."
      }
    ]
  },
  {
    "id": "italian-game",
    "group": "Open Games",
    "name": "Italian Game",
    "description": "A classical opening aiming for rapid development and control of the center with the bishop on c4.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — White opens with the King's Pawn, the most dynamic first move. This controls the d5 and f5 squares, opens diagonals for the bishop and queen, and begins the fight for the center."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black establishes a symmetric pawn center. This classical response leads to open positions where both sides will fight for the initiative. The e5 pawn is now a target but also a strong central asset."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — developing with tempo, attacking e5. The knight is perfectly placed, controlling the key central squares d4 and g5. White follows the golden rule: develop pieces toward the center with each move."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nc6 — defending e5 while developing. The knight controls d4 and adds pressure to e5. Black is following the same sound developing principles as White, setting up a balanced but tense middlegame."
      },
      {
        "san": "Bc4",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
        "commentary": "Bc4 — the Italian move! The bishop targets the f7 square, Black's weakest point early in the game. This bishop is incredibly active, eyeing the kingside and supporting a future d4 pawn break. The Giuoco Piano begins!"
      },
      {
        "san": "Bc5",
        "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
        "commentary": "Bc5 — Black mirrors the strategy! The bishop is equally active on c5, targeting f2 and controlling the center. Both sides have developed actively; the position is razor-sharp with balanced play ahead."
      },
      {
        "san": "c3",
        "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 0 4",
        "commentary": "c3 — preparing d4! White plans a strong pawn center with d4, which would challenge Black's bishop and gain central space. This is the Giuoco Piano approach — solid and strategic, building for a powerful center break."
      },
      {
        "san": "Nf6",
        "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5",
        "commentary": "Nf6 — Black develops actively and attacks e4! Instead of allowing White to build a big center unopposed, Black counter-attacks immediately. The position is now complex with both sides having active pieces and tactical possibilities."
      }
    ]
  },
  {
    "id": "sicilian-defense",
    "group": "Semi-Open Games",
    "name": "Sicilian Defense",
    "description": "The most popular chess opening at all levels. Black fights for the center asymmetrically, leading to rich dynamic play.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — White claims the center immediately. This is the most aggressive and principled first move, leading to sharp, open positions where both sides fight for the initiative from the very start."
      },
      {
        "san": "c5",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "c5 — the Sicilian Defense! Rather than matching White's central pawn, Black fights for d4 from the flank. This creates an asymmetric position where Black accepts a queenside majority in exchange for active counterplay. It's the most-played response to 1.e4."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — White develops the knight and prepares d4. This is the most popular continuation, leading to the Open Sicilian. White will follow up with d4, exchanging pawns and gaining a lead in development while Black gets a strong pawn structure."
      },
      {
        "san": "d6",
        "fen": "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
        "commentary": "d6 — preparing to develop the knight to f6 without allowing e5 to kick it. Black solidifies the center and prepares to challenge White's e4 pawn later. This leads to the Najdorf or Classical Sicilian depending on Black's next moves."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
        "commentary": "d4 — the critical pawn break! White opens the center, gaining space and a strong initiative. After the pawn exchange, White will have a d4 pawn versus Black's c5 pawn — a structural imbalance that defines the Sicilian middlegame."
      },
      {
        "san": "cxd4",
        "fen": "rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
        "commentary": "cxd4 — Black captures, opening the c-file for the rook and creating the characteristic Sicilian pawn structure. Black will operate on the queenside while White attacks on the kingside — a race that leads to incredibly complex middlegame battles."
      },
      {
        "san": "Nxd4",
        "fen": "rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
        "commentary": "Nxd4 — White recaptures with the knight, centralizing it powerfully. The knight on d4 is a dominant piece, controlling the center. Now Black must decide how to develop — the choices here lead to the many famous Sicilian variations."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
        "commentary": "Nf6 — the Classical Sicilian! Black develops the knight to its best square, attacking the e4 pawn and controlling the center. The position is now rich with possibilities for both sides, characteristic of the Sicilian's dynamic and unbalanced nature."
      }
    ]
  },
  {
    "id": "queens-gambit",
    "group": "Closed Games",
    "name": "Queen's Gambit",
    "description": "A classical opening where White offers a pawn to gain central control and rapid development.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — the Queen's Pawn Opening! White claims the center differently from 1.e4. The d4 pawn is well-protected by the queen, making it very hard to challenge immediately. This leads to more strategic, closed positions."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "d5 — Black meets the center pawn with a center pawn! This is the most principled response, establishing a symmetric pawn center. Both sides now have strong central pawns and the battle begins for who can control the center more effectively."
      },
      {
        "san": "c4",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "c4 — the Queen's Gambit! White offers a pawn to deflect Black's central pawn. If Black captures, White will recapture with a piece and gain central control. This is one of the oldest and most respected openings — used by world champions for centuries."
      },
      {
        "san": "e6",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "e6 — the Queen's Gambit Declined! Black refuses the gambit pawn and reinforces d5. While this slightly closes in the dark-squared bishop, it creates a very solid position. Black says: I don't need your pawn — I'll hold the center and develop solidly."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3",
        "commentary": "Nc3 — developing the knight to its natural square, supporting the d4 pawn and preparing e4. White is building a classical pawn center. The knight on c3 will become very active in the coming middlegame battles."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
        "commentary": "Nf6 — Black develops the knight to its best square, controlling d5 and e4. This is the most active developing move, keeping pressure on White's center while preparing to castle. The position is now a classic QGD setup."
      },
      {
        "san": "Bg5",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR b KQkq - 3 4",
        "commentary": "Bg5 — a powerful developing move that pins the f6 knight! If Black captures on c4, White will play e4 gaining a strong center. The pin on the knight creates lasting pressure and is a key strategic idea in the Queen's Gambit."
      },
      {
        "san": "Be7",
        "fen": "rnbqk2r/ppp1bppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq - 4 5",
        "commentary": "Be7 — the solid Classical Variation! Black breaks the pin quietly, preparing to castle kingside. This is a patient, strategic approach. Black's position is solid if somewhat cramped, and the game will be a long strategic battle for control."
      }
    ]
  },
  {
    "id": "kings-indian-defense",
    "group": "Indian Defenses",
    "name": "King's Indian Defense",
    "description": "A hypermodern defense where Black allows White to build a big center and then attacks it from the flanks.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — White opens with the Queen's Pawn, aiming for central control and a strategic game. This move supports e4 and creates a pawn chain that can dominate the center if Black doesn't react correctly."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2",
        "commentary": "Nf6 — the Indian Defense! Black develops the knight to f6, controlling e4 and signaling hypermodern intentions. Rather than occupying the center immediately, Black will let White build it and then attack it later. A flexible, dynamic approach."
      },
      {
        "san": "c4",
        "fen": "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "c4 — White builds the English-QP setup, claiming space and preparing e4. This creates a massive pawn center that will be Black's target. White is following the classical approach: establish pawns in the center, then develop pieces behind them."
      },
      {
        "san": "g6",
        "fen": "rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "g6 — the King's Indian Defense! Black prepares to fianchetto the bishop. This hypermodern idea allows White to build a big center while Black prepares a powerful counterattack. The coming bishop on g7 will be a fearsome weapon."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkb1r/pppppp1p/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3",
        "commentary": "Nc3 — White develops the knight and continues building the center. The knight on c3 supports d4 and prepares e4. White is following the classical plan of occupying the center with pawns and developing pieces behind them."
      },
      {
        "san": "Bg7",
        "fen": "rnbqk2r/ppppppbp/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
        "commentary": "Bg7 — the King's Indian bishop! On g7, this bishop is a dragon pointing at the queenside. It will become enormously powerful once Black breaks with e5 or c5. This bishop is the soul of the King's Indian Defense."
      },
      {
        "san": "e4",
        "fen": "rnbqk2r/ppppppbp/5np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 4",
        "commentary": "e4 — White establishes the big center! The e4 pawn creates a space advantage and the threat of e5 to push Black's knight around. This is exactly what Black wanted — now the counterattack with e5 will challenge this center directly."
      },
      {
        "san": "d6",
        "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq - 0 5",
        "commentary": "d6 — preparing e5! Black solidifies the position and prepares the key thematic break. The d6 pawn keeps e5 under Black's control and prepares to challenge White's massive center. The battle lines are drawn for a complex middlegame."
      }
    ]
  },
  {
    "id": "london-system",
    "group": "Closed Games",
    "name": "London System",
    "description": "A solid, systematic opening where White builds a reliable setup with d4, Bf4, and e3, regardless of Black's responses.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — White begins the London System. This flexible first move controls the center and supports c4 or e4 in the future. The London is known for being solid and reliable, providing a comfortable position without needing extensive memorization."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "d5 — Black meets in the center. This is one of the most common responses, challenging White's central pawn directly. Black aims for a solid, symmetric structure while looking for counterplay opportunities in the middlegame."
      },
      {
        "san": "Bf4",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR b KQkq - 1 2",
        "commentary": "Bf4 — the key move of the London System! The bishop develops outside the pawn chain before playing e3. On f4, the bishop controls the dark squares, supports e3, and aims at the c7 pawn. This is the defining characteristic of the London setup."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR w KQkq - 2 3",
        "commentary": "Nf6 — the most natural response, developing the knight to control the center. Black is unperturbed by the London setup and continues developing normally. The knight on f6 attacks the e4 square and prepares to castle kingside."
      },
      {
        "san": "e3",
        "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/4P3/PPP2PPP/RN1QKBNR b KQkq - 0 3",
        "commentary": "e3 — solidifying the bishop and preparing to develop the f1 bishop. The London System involves this solid triangle: d4, e3, Bf4. White's position is very solid and difficult to attack, but the bishop on c1 remains temporarily blocked."
      },
      {
        "san": "e6",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/3P1B2/4P3/PPP2PPP/RN1QKBNR w KQkq - 0 4",
        "commentary": "e6 — Black reinforces d5 and prepares to develop the f8 bishop. This creates a solid structure. Black is matching White's solidity with their own reliable setup, preparing for a strategic middlegame battle."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/3P1B2/4PN2/PPP2PPP/RN1QKB1R b KQkq - 1 4",
        "commentary": "Nf3 — developing the knight to its natural square. The London System triangle is almost complete: d4, Bf4, e3, Nf3. This setup is incredibly solid and flexible. White can expand with c4 or c3 depending on what Black does."
      },
      {
        "san": "Bd6",
        "fen": "rnbqk2r/ppp2ppp/3bpn2/3p4/3P1B2/4PN2/PPP2PPP/RN1QKB1R w KQkq - 2 5",
        "commentary": "Bd6 — Black challenges the f4 bishop directly! By placing the bishop on d6, Black attacks the f4 bishop and offers an exchange. This is an active approach. White must decide whether to exchange bishops or retreat, each with different strategic implications."
      }
    ]
  },
  {
    "id": "petrov-defense",
    "group": "Open Games",
    "name": "Petrov Defense",
    "description": "Also called the Russian Game, Black immediately counter-attacks e4 rather than defending e5, leading to symmetrical and solid positions.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — White opens the game and seizes central space. The King's Pawn opening invites immediate conflict and is one of the most theoretically rich first moves in chess."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black mirrors the central occupation, creating the classical symmetry. Both sides now have strong central pawns and the battle for initiative begins immediately."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — White develops the knight with a threat to the e5 pawn. This is the most principled move, following the guideline of developing toward the center while creating immediate pressure."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nf6 — the Petrov Defense! Rather than defending e5, Black immediately counter-attacks e4. This equal treatment of the center leads to symmetrical positions where Black can comfortably equalize. Preferred by players who enjoy solid, strategic games."
      },
      {
        "san": "Nxe5",
        "fen": "rnbqkb1r/pppp1ppp/5n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R b KQkq - 0 3",
        "commentary": "Nxe5 — White accepts the invitation and captures the pawn. This leads to the main Petrov tabiya. White must play very carefully here, as Black has a precise equalizing sequence if White tries to grab too much material."
      },
      {
        "san": "d6",
        "fen": "rnbqkb1r/ppp2ppp/3p1n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 4",
        "commentary": "d6 — the critical move! Black attacks the e5 knight, threatening to regain the pawn. It's essential to play d6 before recapturing on e4 — playing Nxe4 immediately would be a tactical error that loses material."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkb1r/ppp2ppp/3p1n2/8/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 4",
        "commentary": "Nf3 — White retreats the knight to safety. With both e-pawns now gone, the position becomes more symmetrical. White has a slight lead in development, but Black's solid structure makes it very difficult to create a meaningful advantage."
      },
      {
        "san": "Nxe4",
        "fen": "rnbqkb1r/ppp2ppp/3p4/8/4n3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 5",
        "commentary": "Nxe4 — Black recaptures the pawn, restoring material equality. The position is now symmetrical with equal chances. This is the characteristic Petrov endgame setup — solid and drawish, but with plenty of play for both sides if desired."
      }
    ]
  },
  {
    "id": "kings-gambit",
    "group": "Open Games",
    "name": "King's Gambit",
    "description": "One of the most romantic openings in chess — White sacrifices a pawn on move 2 for rapid development and a fierce attack.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — White opens aggressively. The King's Pawn is the most dynamic first move, preparing to seize the center and launch a powerful kingside attack."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black establishes a strong central pawn, mirroring White's ambitions. The classical symmetry sets the stage for a fierce battle for central control."
      },
      {
        "san": "f4",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2",
        "commentary": "f4 — the King's Gambit! White offers a pawn to deflect Black's central e5 pawn and open the f-file for the rook. This romantic sacrifice was the most popular opening in the 19th century, beloved by attacking players throughout history."
      },
      {
        "san": "exf4",
        "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3",
        "commentary": "exf4 — Black accepts the gambit, taking the pawn and opening the e5 square. Now White will play d4 and Nf3, gaining rapid development and a powerful center. Black must be extremely careful not to fall behind in development."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R b KQkq - 1 3",
        "commentary": "Nf3 — White develops the knight with tempo, attacking the f4 pawn and preparing d4. The gambit philosophy: give up a pawn to gain time and open lines. White's goal is to develop all pieces rapidly and launch a kingside assault."
      },
      {
        "san": "g5",
        "fen": "rnbqkbnr/pppp1p1p/8/6p1/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4",
        "commentary": "g5 — Black holds the gambit pawn! This bold move defends f4 while aggressively claiming space on the kingside. However, it weakens the kingside and delays development. The position becomes incredibly sharp and tactical."
      },
      {
        "san": "h4",
        "fen": "rnbqkbnr/pppp1p1p/8/6p1/4Pp1P/5N2/PPPP2P1/RNBQKB1R b KQkq - 0 4",
        "commentary": "h4 — the Kieseritzky Gambit attack! White attacks the g5 pawn, trying to undermine Black's hold on f4. This creates massive complications. If g4, the knight has to move, giving White a tempo. The game becomes a race between attack and pawn-grabbing."
      },
      {
        "san": "g4",
        "fen": "rnbqkbnr/pppp1p1p/8/8/4PppP/5N2/PPPP2P1/RNBQKB1R w KQkq - 0 5",
        "commentary": "g4 — Black pushes aggressively, attacking the f3 knight. The position is now incredibly sharp. White must choose between the bold Ng5 (leading to the Allgaier Gambit) or the positional Ne5. Every move matters in this tactically explosive position."
      }
    ]
  },
  {
    "id": "vienna-game",
    "group": "Open Games",
    "name": "Vienna Game",
    "description": "White develops the queen's knight early, preparing a flexible attack with f4 or the immediate Vienna Gambit.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — White begins with the dynamic King's Pawn. The Vienna Game starts here, with White planning to support e4 and prepare an f4 advance rather than the immediate Nf3."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black occupies the center symmetrically. This creates the classic open-game tension where both sides must fight for control of the vital central squares."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 2",
        "commentary": "Nc3 — the Vienna move! White develops the queen's knight before playing Nf3. This flexible setup prepares f4, which can be played as a gambit or as a positional advance. The Vienna avoids early knight exchanges and keeps more tension."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 3",
        "commentary": "Nf6 — the most active response, attacking e4 immediately. Black follows the principle of counter-attacking in the center. The position now has similarities to the Four Knights but with White's extra flexibility from Nc3 before Nf3."
      },
      {
        "san": "f4",
        "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq - 0 3",
        "commentary": "f4 — the Vienna Gambit! White pushes aggressively, aiming to open the f-file and create a powerful center. If Black captures en passant or plays exf4, White gets rapid development and attacking chances reminiscent of the King's Gambit."
      },
      {
        "san": "d5",
        "fen": "rnbqkb1r/ppp2ppp/5n2/3pp3/4PP2/2N5/PPPP2PP/R1BQKBNR w KQkq - 0 4",
        "commentary": "d5 — Black fights back in the center! Rather than accepting the gambit, Black counter-attacks immediately. This principled response challenges White's pawn center and opens lines for Black's pieces. The position becomes sharply tactical."
      },
      {
        "san": "fxe5",
        "fen": "rnbqkb1r/ppp2ppp/5n2/3pP3/4P3/2N5/PPPP2PP/R1BQKBNR b KQkq - 0 4",
        "commentary": "fxe5 — White captures, maintaining the pawn tension. The position now has a pawn chain that White will try to use for a kingside attack. Black's knight on f6 is an important piece that will try to undermine this chain."
      },
      {
        "san": "Nxe4",
        "fen": "rnbqkb1r/ppp2ppp/8/3pP3/4n3/2N5/PPPP2PP/R1BQKBNR w KQkq - 0 5",
        "commentary": "Nxe4 — Black takes the pawn! The position is now double-edged. Black has won a pawn but White's active pieces and open f-file provide serious compensation. Both sides must play precisely in the complex middlegame that follows."
      }
    ]
  },
  {
    "id": "bishops-opening",
    "group": "Open Games",
    "name": "Bishop's Opening",
    "description": "White develops the king's bishop to c4 on move 2, targeting the vulnerable f7 square and keeping flexible options.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn, creating immediate central tension. White will follow with a direct bishop development to the most active diagonal."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black matches the central occupation, leading to the classical open game where both sides fight for initiative from the outset."
      },
      {
        "san": "Bc4",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq - 1 2",
        "commentary": "Bc4 — the Bishop's Opening! White develops the bishop immediately to its most active square before playing Nf3. This avoids the Petrov Defense (2...Nf6) and keeps more options open. The bishop eyes the f7 pawn, Black's perennial weakness."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq - 2 3",
        "commentary": "Nf6 — Black develops actively, attacking e4. This is the most natural and energetic response. Black doesn't worry about the bishop's aggressive placement and instead focuses on counterplay against White's center."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
        "commentary": "Nf3 — White develops the knight with the threat to e5. Now the position resembles the Italian Game but with a different move order. White has two active pieces pointing at Black's kingside."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
        "commentary": "Nc6 — defending e5 and developing simultaneously. The knight is perfectly placed in the center. Black has a solid and active position with good prospects for the middlegame."
      },
      {
        "san": "d3",
        "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 4",
        "commentary": "d3 — the slow, positional approach. White consolidates the center rather than immediately pushing d4. This is the Giuoco Pianissimo setup — a quiet Italian that leads to long maneuvering games where subtle positional understanding matters most."
      },
      {
        "san": "Bc5",
        "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 1 5",
        "commentary": "Bc5 — Black develops the bishop to its best square, matching White's aggressive diagonal. Both bishops eye critical central squares, and both sides are well-developed. The middlegame will be a rich strategic battle with many possibilities."
      }
    ]
  },
  {
    "id": "four-knights-game",
    "group": "Open Games",
    "name": "Four Knights Game",
    "description": "Both sides develop both knights before any pawns move beyond the initial e4/e5, leading to a rich strategic middlegame.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — White establishes a central pawn and opens lines for the bishop and queen. This aggressive first move sets the tone for a dynamic, piece-oriented game."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black matches the central occupation. The symmetric pawn structure creates a balanced position where both sides have equal chances, and the game will be decided by piece activity."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — developing with tempo, attacking e5. The knight is ideally placed in the center and prepares for the classic open-game development plan."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nc6 — defending the e5 pawn while developing. This is the most natural response, following the principle of developing toward the center and defending attacked pawns with pieces when possible."
      },
      {
        "san": "Nc3",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq - 3 3",
        "commentary": "Nc3 — the Four Knights Game begins! White develops the second knight symmetrically. This solid move supports the center and prepares to challenge Black's pawn structure. The Four Knights is renowned for its classical elegance and rich strategic content."
      },
      {
        "san": "Nf6",
        "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 4 4",
        "commentary": "Nf6 — Black mirrors the development! Both sides have developed their knights to ideal squares. This symmetrical setup is the hallmark of the Four Knights. The game is balanced and both sides must now fight for a positional advantage."
      },
      {
        "san": "Bb5",
        "fen": "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 5 4",
        "commentary": "Bb5 — the Spanish Four Knights! White pins the c6 knight, applying the same idea as the Ruy Lopez. This creates asymmetry and pressure. Alternatively, d4 leads to the Scotch Four Knights, each with different strategic themes."
      },
      {
        "san": "Bb4",
        "fen": "r1bqk2r/pppp1ppp/2n2n2/1B2p3/1b2P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5",
        "commentary": "Bb4 — the symmetric counter-pin! Black replies with the same idea, pinning White's c3 knight against the king. This double-pin situation leads to very complex and rich middlegames. The tension must be resolved carefully by both sides."
      }
    ]
  },
  {
    "id": "scotch-game",
    "group": "Open Games",
    "name": "Scotch Game",
    "description": "White opens the center immediately with d4, leading to open, dynamic positions with early piece activity.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the dynamic King's Pawn opening. White aims for active central play and is willing to open the game early for a tactical battle."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black establishes a strong foothold in the center. The symmetric setup creates the conditions for the Scotch's characteristic open, tactical play."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — developing with tempo and attacking e5. This natural developing move prepares the d4 pawn break that defines the Scotch Game."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nc6 — defending e5 while developing. Black is fully committed to holding the center and developing actively in the classical style."
      },
      {
        "san": "d4",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
        "commentary": "d4 — the Scotch Game! White immediately challenges Black's center with a direct pawn break. This leads to open positions earlier than the Ruy Lopez. The Scotch was a favorite of Kasparov, who revived it at the highest level in the 1990s."
      },
      {
        "san": "exd4",
        "fen": "r1bqkbnr/pppp1ppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
        "commentary": "exd4 — Black captures, opening the center. This exchange is practically forced — allowing White to push d5 would give too much space. Now White will recapture and the central pawn balance is disrupted, leading to dynamic play."
      },
      {
        "san": "Nxd4",
        "fen": "r1bqkbnr/pppp1ppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
        "commentary": "Nxd4 — White recaptures with the knight, placing it on a dominant central square. The knight on d4 controls many squares and puts pressure on c6. Now Black must choose how to develop — the main lines are Nf6, Bc5, and Qh4+."
      },
      {
        "san": "Bc5",
        "fen": "r1bqk1nr/pppp1ppp/2n5/2b5/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
        "commentary": "Bc5 — one of the critical responses! The bishop is immediately active, targeting f2 and preparing to challenge the d4 knight. This classical developing move leads to rich, double-edged positions with many tactical and strategic themes."
      }
    ]
  },
  {
    "id": "evans-gambit",
    "group": "Open Games",
    "name": "Evans Gambit",
    "description": "An aggressive sacrifice of the b4 pawn in the Italian Game, gaining rapid development and a powerful attacking formation.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the opening salvo of the Evans Gambit begins with the standard King's Pawn. White is heading for one of the most romantic and attacking openings in all of chess theory."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black takes up the challenge in the center. The game is headed for the Italian Game setup that will transform dramatically on move 4."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — developing with purpose. White is building the Italian Game setup as a springboard for the upcoming pawn sacrifice."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nc6 — Black develops naturally. The stage is now set for one of the most famous gambits in chess history."
      },
      {
        "san": "Bc4",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
        "commentary": "Bc4 — entering the Italian Game. The bishop aims at f7 and prepares the Evans Gambit. This is the necessary prerequisite before the dramatic b4 offer."
      },
      {
        "san": "Bc5",
        "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
        "commentary": "Bc5 — Black mirrors with an equally active bishop. With both bishops on the c4-c5 symmetrical squares, the position is balanced — until White's next explosive move changes everything."
      },
      {
        "san": "b4",
        "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R b KQkq - 0 4",
        "commentary": "b4 — the Evans Gambit! White sacrifices a pawn to gain time and open the b2-diagonal for the bishop. After Bxb4, White plays c3, then d4, and the bishops sweep through the center with tremendous power. This gambit was a favorite of Adolf Anderssen and Paul Morphy."
      },
      {
        "san": "Bxb4",
        "fen": "r1bqk1nr/pppp1ppp/2n5/4p3/1bB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq - 0 5",
        "commentary": "Bxb4 — Black accepts the gambit. Now White will play c3, forcing the bishop to move again and building a powerful pawn center with d4. White gets two center pawns and a completely open game in exchange for one pawn — a fearsome attacking setup."
      }
    ]
  },
  {
    "id": "two-knights-defense",
    "group": "Open Games",
    "name": "Two Knights Defense",
    "description": "Black responds to the Italian Game with an aggressive counter-attack rather than the solid Bc5, leading to sharp tactical play.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn, leading to the Italian Game complex. White aims for a classical attacking setup."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black establishes a strong center. The stage is set for the Italian Game, one of the oldest and most analyzed openings in chess."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — developing with tempo. The knight attacks e5 and prepares the bishop move to c4, completing the Italian setup."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nc6 — Black defends e5 naturally. Both sides are following classical development principles, and the choice of bishop square on move 3 will define the character of the game."
      },
      {
        "san": "Bc4",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
        "commentary": "Bc4 — the Italian bishop placement! The bishop eyes f7 and prepares the Two Knights. Now Black must decide: the solid Bc5 or the fighting Nf6?"
      },
      {
        "san": "Nf6",
        "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
        "commentary": "Nf6 — the Two Knights Defense! Rather than the solid Bc5, Black immediately counter-attacks e4. This is the fighting choice, inviting complications. Black says: I'm not afraid of your threats — I'll create threats of my own!"
      },
      {
        "san": "Ng5",
        "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p1N1/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 5 4",
        "commentary": "Ng5 — the critical attack! White launches an immediate assault on f7, the weakest point in Black's position. This aggressive move leads to some of the most complex and analyzed positions in opening theory, including the legendary Fried Liver Attack."
      },
      {
        "san": "d5",
        "fen": "r1bqkb1r/ppp2ppp/2n2n2/3pp1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 0 5",
        "commentary": "d5 — the only good response! Black must counter-attack immediately in the center. After exd5, Black will play Na5 attacking the bishop, keeping the game in sharp balance. This leads to incredibly complex tactical battles that have been analyzed for centuries."
      }
    ]
  },
  {
    "id": "philidor-defense",
    "group": "Open Games",
    "name": "Philidor Defense",
    "description": "Named after the legendary player Philidor, Black supports e5 with d6 — a solid but somewhat passive setup.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — White opens the game and claims central space. The Philidor Defense arises when Black chooses a solid, less common response to this classical opening."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black occupies the center symmetrically. This sets the stage for the Philidor, where Black will reinforce this pawn with d6 rather than the more active Nc6."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — developing with tempo. White attacks e5 and will now see Black's chosen defensive plan."
      },
      {
        "san": "d6",
        "fen": "rnbqkbnr/ppp2ppp/3p4/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
        "commentary": "d6 — the Philidor Defense! Named after the 18th-century chess genius François-André Philidor, who famously declared 'pawns are the soul of chess.' This solid pawn support of e5 is modest but creates a sturdy position. Black avoids the sharp Petrov complications."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/ppp2ppp/3p4/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
        "commentary": "d4 — White challenges the center immediately. This is the most ambitious response, aiming to create a powerful pawn center and gain a space advantage before Black can complete development."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/ppp2ppp/3p1n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 4",
        "commentary": "Nf6 — the Hanham Variation! Black develops the knight and attacks e4, the most active response in the Philidor. This keeps the game fighting and avoids the passive positions that arise from immediate exd4."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkb1r/ppp2ppp/3p1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 2 4",
        "commentary": "Nc3 — White develops naturally and reinforces the center. The position is now a rich strategic battle. White has a spatial advantage but Black's setup is solid with no obvious weaknesses."
      },
      {
        "san": "Be7",
        "fen": "rnbqk2r/ppp1bppp/3p1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 3 5",
        "commentary": "Be7 — Black develops the bishop and prepares to castle. The Philidor is often underestimated, but it leads to rich middlegame play. Black's compact structure is difficult to break down, and there are always counterplay chances with ...exd4 and ...c6."
      }
    ]
  },
  {
    "id": "ponziani-opening",
    "group": "Open Games",
    "name": "Ponziani Opening",
    "description": "An early c3 supports d4, aiming to build a strong pawn center, though Black can achieve equality with accurate play.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn, leading toward the Ponziani. White has a specific plan of building a strong center with c3 and d4."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black occupies the center. The symmetrical setup will be disrupted when White immediately starts preparing the d4 advance."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — developing the knight to attack e5. This is the standard move before the Ponziani's unique third move."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nc6 — Black defends e5 while developing. This natural move is critical here, as it prepares to meet White's upcoming c3-d4 plan with ...d5."
      },
      {
        "san": "c3",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R b KQkq - 0 3",
        "commentary": "c3 — the Ponziani Opening! White immediately prepares d4, planning to build a massive pawn center. This move was popular in the 19th century. The idea is straightforward: support d4 with c3 and gain a central space advantage."
      },
      {
        "san": "d5",
        "fen": "r1bqkbnr/ppp2ppp/2n5/3pp3/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq - 0 4",
        "commentary": "d5 — the most active response! Black immediately counter-attacks in the center before White establishes d4. This principled move creates immediate complications and gives Black excellent counterplay. The position opens up dramatically."
      },
      {
        "san": "Bb5",
        "fen": "r1bqkbnr/ppp2ppp/2n5/1B1pp3/4P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 1 4",
        "commentary": "Bb5 — pinning the c6 knight and adding pressure to the d5 pawn. White creates complex positional pressure. Now if Black plays dxe4, White has active piece play to compensate for the somewhat disrupted pawn structure."
      },
      {
        "san": "Nf6",
        "fen": "r1bqkb1r/ppp2ppp/2n2n2/1B1pp3/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 2 5",
        "commentary": "Nf6 — Black continues development and attacks e4. The position is now sharp and double-edged. Both sides have active pieces and the central tension creates rich tactical possibilities. The Ponziani leads to less-explored territory compared to the main open game lines."
      }
    ]
  },
  {
    "id": "french-defense",
    "group": "Semi-Open Games",
    "name": "French Defense",
    "description": "Black builds a solid pawn chain with e6 and d5, fighting for the center while accepting a temporarily cramped position.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — White opens aggressively, aiming for a powerful center. The French Defense arises when Black chooses a different approach than the symmetric 1...e5."
      },
      {
        "san": "e6",
        "fen": "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e6 — the French Defense! Black prepares d5 while building a solid pawn structure. This move signals Black's strategic intent: fight for the center with d5, accept a slightly cramped position, and counterattack White's center with c5 or f6 later."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — White establishes a powerful pawn center. The d4-e4 duo controls the center and gains space. Now the battle is for the d5 square — White wants to maintain this center while Black wants to undermine it."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "d5 — Black challenges the center immediately! This is the key French move, creating a pawn chain. White's e4 pawn is now under pressure. The battle for the center intensifies, and White must choose how to handle this challenge."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
        "commentary": "e5 — the Advance Variation! White pushes forward, claiming more space and restricting the f6 knight. This creates a locked pawn center. Black must now attack the chain at its base with c5 while White expands on the kingside."
      },
      {
        "san": "c5",
        "fen": "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
        "commentary": "c5 — the standard French counterattack! Black immediately targets the base of White's pawn chain. This is the thematic response in the Advance Variation — attack the d4 pawn and fight for queenside space. The game will be a battle of pawn breaks."
      },
      {
        "san": "c3",
        "fen": "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/2P5/PP3PPP/RNBQKBNR b KQkq - 0 4",
        "commentary": "c3 — White solidifies the pawn chain, reinforcing d4. White's plan is clear: maintain the e5-d4 pawn chain and expand on the kingside with f4-f5, while Black tries to undermine the chain with ...Nc6 and ...cxd4."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P5/PP3PPP/RNBQKBNR w KQkq - 1 5",
        "commentary": "Nc6 — Black develops the knight and attacks d4. This is the most active piece development in the Advance Variation. Black is building up queenside pressure while preparing to challenge White's central structure. The middlegame will be a complex strategic battle."
      }
    ]
  },
  {
    "id": "french-winawer",
    "group": "Semi-Open Games",
    "name": "French Winawer",
    "description": "The sharpest French variation — Black pins the c3 knight with Bb4, leading to wild, imbalanced positions.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the stage is set for the Winawer, one of the most theoretically complex variations in all of chess."
      },
      {
        "san": "e6",
        "fen": "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e6 — the French Defense begins. Black will fight for the center with d5 and aim to create asymmetrical positions that are rich in strategic and tactical complexity."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — White builds the classical French pawn center. The d4-e4 duo is White's central asset and both sides will battle over this territory throughout the game."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "d5 — Black challenges the center directly, creating the typical French pawn structure. The tension between the central pawns will define the character of the entire game."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 3",
        "commentary": "Nc3 — White develops the knight to its natural square, supporting e4 and preparing Nge2 or Nf3. This is the most flexible response, keeping many options open."
      },
      {
        "san": "Bb4",
        "fen": "rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 2 4",
        "commentary": "Bb4 — the Winawer! Black pins the c3 knight against the king, creating immediate tactical complications. This bold move was popularized by the Polish master Simon Winawer. It leads to the sharpest French positions, where White often sacrifices material for a ferocious attack."
      },
      {
        "san": "e5",
        "fen": "rnbqk1nr/ppp2ppp/4p3/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 4",
        "commentary": "e5 — White advances aggressively, gaining space and fixing the pawn structure. Now White will try to build a massive kingside attack with Qg4 and other aggressive moves, while Black counterattacks on the queenside with c5."
      },
      {
        "san": "c5",
        "fen": "rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 5",
        "commentary": "c5 — Black immediately counter-attacks! This thematic pawn break challenges d4 and opens lines on the queenside where Black's counterplay lies. The game will be a race: White attacks the king while Black creates queenside pressure. A wildly imbalanced struggle awaits."
      }
    ]
  },
  {
    "id": "french-advance",
    "group": "Semi-Open Games",
    "name": "French Advance",
    "description": "White advances e5, gaining space and restricting Black's pieces, while Black counterattacks with c5.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn, preparing the Advance Variation. White will immediately push forward and seize space on the kingside."
      },
      {
        "san": "e6",
        "fen": "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e6 — Black enters the French, accepting the possibility of a spatial disadvantage in exchange for a solid, unbreakable pawn structure."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — White builds the dual pawn center. These two pawns together control a massive amount of central territory."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "d5 — Black challenges the center, establishing the characteristic French pawn chain. Both sides now have a blocked center, and the game will be determined by pawn breaks."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
        "commentary": "e5 — the Advance Variation! White immediately pushes the pawn, claiming space and restricting the f6 knight. This is a very direct approach that avoids many of Black's standard French counter-options. White aims for a kingside attack."
      },
      {
        "san": "c5",
        "fen": "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
        "commentary": "c5 — the thematic response! Black attacks the base of White's pawn chain immediately. The French player must always strike at d4 when possible. If White doesn't defend carefully, the chain collapses and Black gains equality."
      },
      {
        "san": "c3",
        "fen": "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/2P5/PP3PPP/RNBQKBNR b KQkq - 0 4",
        "commentary": "c3 — reinforcing d4. White defends the chain and plans to complete development with Nf3, Be2, and eventual kingside expansion. The game is a strategic battle: White's space advantage against Black's queenside counterplay."
      },
      {
        "san": "Qb6",
        "fen": "rnb1kbnr/pp3ppp/1q2p3/2ppP3/3P4/2P5/PP3PPP/RNBQKBNR w KQkq - 1 5",
        "commentary": "Qb6 — an immediate attack on both b2 and d4! This aggressive queen move is a popular modern treatment. Black immediately creates threats and forces White to respond carefully. The position is sharp with both sides having their own plans and dangers."
      }
    ]
  },
  {
    "id": "french-tarrasch",
    "group": "Semi-Open Games",
    "name": "French Tarrasch",
    "description": "White plays Nd2 instead of Nc3, avoiding the pin from Bb4 and playing a solid, strategic game.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the opening moves of the French Defense complex. White prepares to build a strong center."
      },
      {
        "san": "e6",
        "fen": "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e6 — Black enters the French. The Tarrasch variation will avoid the complications of the Winawer by keeping the knight off c3."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — White establishes the classic French center. Now the key decision is how to support it."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "d5 — Black challenges the center immediately, creating the French pawn tension."
      },
      {
        "san": "Nd2",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR b KQkq - 1 3",
        "commentary": "Nd2 — the Tarrasch Variation! Rather than Nc3, White develops the knight to d2. This avoids any pin from Bb4 and keeps more options open. While the d2 knight temporarily blocks the c1 bishop and queen, it will eventually maneuver to a strong square via f3 or b3."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq - 2 4",
        "commentary": "Nf6 — Black develops and attacks e4. This is the most active response, keeping central tension. Black could also play c5 immediately, but developing the knight first is equally valid."
      },
      {
        "san": "e5",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3pP3/3P4/8/PPPN1PPP/R1BQKBNR b KQkq - 0 4",
        "commentary": "e5 — White advances, gaining space. In the Tarrasch, White often plays e5 earlier than in other French lines, gaining a space advantage. Now Black must decide how to deal with the restricted position."
      },
      {
        "san": "Nfd7",
        "fen": "rnbqkb1r/pppn1ppp/4p3/3pP3/3P4/8/PPPN1PPP/R1BQKBNR w KQkq - 1 5",
        "commentary": "Nfd7 — the knight retreats, preparing c5. This move looks passive but is actually very purposeful. From d7, the knight can go to c5 or b6, applying pressure to White's center. The French player accepts short-term passivity for long-term counterplay."
      }
    ]
  },
  {
    "id": "french-exchange",
    "group": "Semi-Open Games",
    "name": "French Exchange",
    "description": "White exchanges pawns on d5, creating a symmetrical structure that often leads to simplified, equal positions.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the first move that will lead to the French Exchange, a simplified variation with symmetrical structure."
      },
      {
        "san": "e6",
        "fen": "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e6 — the French Defense. Black will be surprised when White opts for the quiet exchange variation rather than maintaining central tension."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — building the center. White is about to defuse the central tension in a surprising way."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "d5 — Black establishes the French pawn chain, expecting White to maintain or advance the center."
      },
      {
        "san": "exd5",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
        "commentary": "exd5 — the French Exchange! White immediately captures the d5 pawn, creating a symmetrical isolated-pawn-free structure. This avoids the complex theory of other French variations. The resulting position is solid but offers fewer winning chances for White."
      },
      {
        "san": "exd5",
        "fen": "rnbqkbnr/ppp2ppp/8/3p4/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
        "commentary": "exd5 — Black recaptures, restoring the material balance. The pawn structure is now completely symmetrical: both sides have a pawn on d4/d5 and the same piece configuration. This 'anti-French' approach leads to quiet, strategic games."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/ppp2ppp/8/3p4/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq - 1 4",
        "commentary": "Nf3 — developing naturally. With the symmetrical structure, piece development becomes very important. White will try to exploit any small advantages in piece activity or king safety."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/ppp2ppp/5n2/3p4/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 2 5",
        "commentary": "Nf6 — Black mirrors the development. The position is completely equal and will likely be drawn with best play. However, there is still plenty of chess to be played — slight inaccuracies can be exploited, and both players will try to outmaneuver each other positionally."
      }
    ]
  },
  {
    "id": "caro-kann-defense",
    "group": "Semi-Open Games",
    "name": "Caro-Kann Defense",
    "description": "A solid and reliable defense where Black answers e4 with c6, preparing d5 and a sturdy pawn structure.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — White opens the game. The Caro-Kann is one of the most respected and solid defenses against the King's Pawn."
      },
      {
        "san": "c6",
        "fen": "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "c6 — the Caro-Kann Defense! Black prepares d5 while keeping the option to recapture with the c-pawn, avoiding the weak isolated pawn common in some other defenses. This is the solid choice — favored by world champions Petrosian, Karpov, and many others for its endgame reliability."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — White builds a strong center. The combination of d4 and e4 creates a powerful spatial advantage. Black must now challenge this center with d5."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "d5 — Black challenges the center! Unlike the French where d5 creates a locked pawn chain, in the Caro-Kann Black can recapture with the c-pawn, keeping the light-squared bishop active — this is the key advantage of the Caro-Kann over the French."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 3",
        "commentary": "Nc3 — White defends e4 with the knight, maintaining central control. This leads to the main Caro-Kann lines where Black has several ways to handle the tension."
      },
      {
        "san": "dxe4",
        "fen": "rnbqkbnr/pp2pppp/2p5/8/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
        "commentary": "dxe4 — Black exchanges, opening lines. Now the critical question is how White recaptures. Nxe4 leads to the Classical variation, while Fxe4... wait, there's no f-pawn here. Nxe4 is the main move leading to rich piece play."
      },
      {
        "san": "Nxe4",
        "fen": "rnbqkbnr/pp2pppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR b KQkq - 0 4",
        "commentary": "Nxe4 — the Classical Caro-Kann! The knight comes to a dominant central square. Black must now develop carefully. The key move is Bf5, developing the light-squared bishop outside the pawn chain — one of the Caro-Kann's primary strategic advantages over the French Defense."
      },
      {
        "san": "Bf5",
        "fen": "rn1qkbnr/pp2pppp/2p5/5b2/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 1 5",
        "commentary": "Bf5 — the characteristic Caro-Kann bishop development! The light-squared bishop emerges actively, something impossible in the French Defense where the bishop gets locked behind the e6 pawn. This is why the Caro-Kann is considered more dynamic than the French in the long run."
      }
    ]
  },
  {
    "id": "caro-kann-advance",
    "group": "Semi-Open Games",
    "name": "Caro-Kann Advance",
    "description": "White pushes e5, gaining central space and restricting Black's development, leading to a strategic battle over the pawn chain.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the start of the Caro-Kann Advance, one of the most popular and aggressive ways to meet the Caro-Kann Defense."
      },
      {
        "san": "c6",
        "fen": "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "c6 — the Caro-Kann. Black prepares d5 and will have to deal with White's advance variation which challenges Black's plan from the start."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — White builds the strong center, the prerequisite before the advance."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "d5 — Black challenges the center as planned. Now White has the option to exchange, advance, or maintain tension."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pp2pppp/2p5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
        "commentary": "e5 — the Advance Variation! White stakes out a large space advantage and restricts the development of Black's pieces, particularly the f6 knight. Unlike the French Advance, Black still has an active bishop on c8 that can participate in counterplay."
      },
      {
        "san": "Bf5",
        "fen": "rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 1 4",
        "commentary": "Bf5 — the most active response! Black develops the light-squared bishop outside the pawn chain before it gets locked in. This key difference from the French Defense gives the Caro-Kann player much better prospects. The bishop will be a powerful piece throughout the game."
      },
      {
        "san": "Nf3",
        "fen": "rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq - 2 4",
        "commentary": "Nf3 — developing and supporting the center. White prepares Be2 and castles, building a solid setup behind the space advantage. The pawn chain e5-d4 gives White territorial advantage but Black's active bishop compensates."
      },
      {
        "san": "e6",
        "fen": "rn1qkbnr/pp3ppp/2p1p3/3pPb2/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 5",
        "commentary": "e6 — Black solidifies the pawn structure and prepares to develop the kingside. The position is solid for Black despite the space disadvantage. Black's plan involves ...Ne7-f5 or ...c5 to undermine White's center. A long strategic battle lies ahead."
      }
    ]
  },
  {
    "id": "caro-kann-exchange",
    "group": "Semi-Open Games",
    "name": "Caro-Kann Exchange",
    "description": "White exchanges on d5, leading to a symmetrical position with equal play but limited winning chances.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. White will choose the simplifying exchange variation against the Caro-Kann."
      },
      {
        "san": "c6",
        "fen": "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "c6 — the Caro-Kann Defense, one of Black's most solid responses to 1.e4."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — White builds the central pawns."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "d5 — Black challenges the center as intended in the Caro-Kann setup."
      },
      {
        "san": "exd5",
        "fen": "rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
        "commentary": "exd5 — the Exchange Variation! White immediately resolves the central tension. Unlike the Caro-Kann Classical or Advance, this leads to immediate symmetry. It's a low-risk choice that avoids complex theory at the cost of dynamic advantage."
      },
      {
        "san": "cxd5",
        "fen": "rnbqkbnr/pp2pppp/8/3p4/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
        "commentary": "cxd5 — Black recaptures with the c-pawn, as is the whole point of the Caro-Kann — Black avoids isolated pawns and keeps a solid structure. The symmetrical pawn structure gives roughly equal chances."
      },
      {
        "san": "Bd3",
        "fen": "rnbqkbnr/pp2pppp/8/3p4/3P4/3B4/PPP2PPP/RNBQK1NR b KQkq - 1 4",
        "commentary": "Bd3 — White develops the bishop actively before Nf3, targeting the kingside. White will try to capitalize on the bishop's diagonal and create pressure against Black's position."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pp2pppp/2n5/3p4/3P4/3B4/PPP2PPP/RNBQK1NR w KQkq - 2 5",
        "commentary": "Nc6 — Black develops the knight actively, preparing to place it well and castle. The position is completely equal with symmetrical pawn structures and similar piece activity. Both sides must find creative ways to generate play from this balanced starting point."
      }
    ]
  },
  {
    "id": "scandinavian-defense",
    "group": "Semi-Open Games",
    "name": "Scandinavian Defense",
    "description": "Black immediately challenges e4 with d5, leading to an asymmetrical early queen deployment on move 2.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Scandinavian Defense is one of the oldest recorded openings, with games played as far back as the 15th century."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "d5 — the Scandinavian Defense! Black immediately challenges White's center on move 1. This is the most direct challenge to e4, forcing White to capture or defend. It was once considered dubious but has become a popular weapon at all levels, including the highest."
      },
      {
        "san": "exd5",
        "fen": "rnbqkbnr/ppp1pppp/8/3P4/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "exd5 — White accepts the challenge and captures. Now Black must decide how to recapture — Qxd5 leads to the main line while Nf6 leads to the Modern Scandinavian with dynamic counterplay."
      },
      {
        "san": "Qxd5",
        "fen": "rnb1kbnr/ppp1pppp/8/3q4/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "Qxd5 — Black recaptures with the queen, coming out early. While this violates the opening principle of not moving the queen early, Black intends to relocate the queen to a safe square. The queen on d5 controls many squares and is not easily attacked."
      },
      {
        "san": "Nc3",
        "fen": "rnb1kbnr/ppp1pppp/8/3q4/8/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 3",
        "commentary": "Nc3 — White develops with tempo, attacking the queen. This is the most natural and logical response, developing a piece while gaining time. Black must now move the queen, but has carefully planned for this."
      },
      {
        "san": "Qa5",
        "fen": "rnb1kbnr/ppp1pppp/8/q7/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 4",
        "commentary": "Qa5 — the queen retreats to a safe but active square. From a5, the queen maintains pressure on White's position and prepares counterplay. This is the most popular Scandinavian queen retreat, avoiding exchanges and keeping pressure."
      },
      {
        "san": "Nf3",
        "fen": "rnb1kbnr/ppp1pppp/8/q7/8/2N2N2/PPPP1PPP/R1BQKB1R b KQkq - 3 4",
        "commentary": "Nf3 — White continues development and prepares to castle. White has a comfortable lead in development but Black's position is solid. The Scandinavian player plans to develop quickly with Nf6, Bg4 or Bf5, and castle."
      },
      {
        "san": "Nf6",
        "fen": "rnb1kb1r/ppp1pppp/5n2/q7/8/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 4 5",
        "commentary": "Nf6 — Black develops the knight, attacking e4 again. The Scandinavian is now in its main line. Black has a slightly cramped but solid position. The game typically leads to interesting middlegames where both sides have clear plans and reasonable winning chances."
      }
    ]
  },
  {
    "id": "alekhine-defense",
    "group": "Semi-Open Games",
    "name": "Alekhine Defense",
    "description": "Black invites White to chase the knight across the board with pawn advances, hoping to overextend White's position.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Alekhine Defense challenges this move in the most provocative way possible."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 1 2",
        "commentary": "Nf6 — the Alekhine Defense! Black immediately attacks the e4 pawn with the knight rather than occupying the center with pawns. Named after World Champion Alexander Alekhine, this hypermodern defense invites White to chase the knight across the board with pawns."
      },
      {
        "san": "e5",
        "fen": "rnbqkb1r/pppppppp/5n2/4P3/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "e5 — White accepts the challenge and pushes the knight away. White will continue chasing the knight, gaining central space at the cost of creating a potentially overextended pawn chain. This is the Four Pawns Attack setup."
      },
      {
        "san": "Nd5",
        "fen": "rnbqkb1r/pppppppp/8/3nP3/8/8/PPPP1PPP/RNBQKBNR w KQkq - 1 3",
        "commentary": "Nd5 — the knight hops to d5, still in the center. White must decide how aggressively to pursue it. The knight on d5 is actually very well placed, and Black plans to play d6 or c5 to undermine White's center at the right moment."
      },
      {
        "san": "d4",
        "fen": "rnbqkb1r/pppppppp/8/3nP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
        "commentary": "d4 — White builds an even bigger center. The pawns on e5 and d4 control massive territory. However, each pawn advance creates potential weaknesses that Black will target later in the game."
      },
      {
        "san": "Nb6",
        "fen": "rnbqkb1r/pppppppp/1n6/4P3/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 1 4",
        "commentary": "Nb6 — the knight retreats to b6, having served its purpose of inducing overextension. Black now plans to attack White's overextended center with ...d6 and ...c5. The Alekhine's hypermodern strategy: let White build a big center and then undermine it."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkb1r/pppppppp/1n6/4P3/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq - 2 4",
        "commentary": "Nf3 — White develops and prepares to support the center. White has a massive space advantage but the extended pawns require constant care. Black's plan of ...d6 and ...c5 will eventually put serious pressure on this structure."
      },
      {
        "san": "d6",
        "fen": "rnbqkb1r/ppp1pppp/1n1p4/4P3/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 5",
        "commentary": "d6 — Black immediately challenges the advanced e5 pawn! The central pawn chain must be attacked at its base. After exd6 or a pawn advance, Black gets active counterplay. The game enters complex middle-game territory where both the space advantage and pawn weaknesses play crucial roles."
      }
    ]
  },
  {
    "id": "pirc-defense",
    "group": "Semi-Open Games",
    "name": "Pirc Defense",
    "description": "Black allows White a strong center and fianchettoes the king's bishop, planning to undermine White's pawns from the flanks.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — White establishes central control. The Pirc Defense is a hypermodern response that allows this center to be built."
      },
      {
        "san": "d6",
        "fen": "rnbqkbnr/ppp1pppp/3p4/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "d6 — the first move of the Pirc Defense. Black prepares Nf6 without allowing e5 to kick it. This solid pawn move is the first step in a hypermodern plan of fianchettoing the bishop and attacking White's center from a distance."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/ppp1pppp/3p4/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — White builds the ideal pawn center. The d4-e4 duo controls the center and gives White a significant space advantage. Black will need to undermine this structure carefully."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 1 3",
        "commentary": "Nf6 — Black develops the knight, attacking e4. With d6 already played, the e5 push can't kick this knight as effectively. Black is preparing to fianchetto the bishop and create a solid defensive position."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 2 3",
        "commentary": "Nc3 — White develops and reinforces the center. The Classical System against the Pirc begins here. White aims to maintain the central advantage and launch a kingside attack before Black can undermine the center."
      },
      {
        "san": "g6",
        "fen": "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
        "commentary": "g6 — the Pirc fianchetto! Black prepares to develop the bishop to g7, where it will be a powerful defensive and attacking piece, radiating influence along the long diagonal. This is the defining move of the Pirc Defense — a system that Fischer called 'completely sound.'"
      },
      {
        "san": "Be2",
        "fen": "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP1BPPP/R1BQK1NR b KQkq - 1 4",
        "commentary": "Be2 — the Classical System! White develops the bishop modestly, preparing to castle and maintain the pawn center. This solid approach avoids the sharp complications of the aggressive systems and leads to a long strategic battle."
      },
      {
        "san": "Bg7",
        "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N5/PPP1BPPP/R1BQK1NR w KQkq - 2 5",
        "commentary": "Bg7 — the Pirc bishop finds its ideal home! On g7, this bishop is a powerful defensive piece protecting the king and an attacking piece eyeing the queenside. With castling imminent, Black's setup is complete. A rich middlegame of dynamic play and pawn breaks awaits."
      }
    ]
  },
  {
    "id": "modern-defense",
    "group": "Semi-Open Games",
    "name": "Modern Defense",
    "description": "Black immediately fianchettoes the king's bishop with g6 and Bg7, allowing White to build any center they choose.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — White takes central space. The Modern Defense is the most flexible hypermodern response, allowing White complete freedom in center construction."
      },
      {
        "san": "g6",
        "fen": "rnbqkbnr/pppppp1p/6p1/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "g6 — the Modern Defense! Black immediately prepares the kingside fianchetto without even playing d6 first. This ultra-flexible approach allows Black to see White's entire setup before committing to a pawn structure. It's the most hypermodern of all defenses."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppp1p/6p1/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — White builds a powerful center. Black watches and waits, reserving judgment on how to counterattack. The Modern Defense player trusts in the power of the Bg7 bishop to do the heavy fighting."
      },
      {
        "san": "Bg7",
        "fen": "rnbqk1nr/ppppppbp/6p1/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 1 3",
        "commentary": "Bg7 — the defining move of the Modern Defense! The bishop on g7 is a powerful weapon. From here it controls the long diagonal and will exert tremendous pressure on White's center once the position opens up."
      },
      {
        "san": "Nc3",
        "fen": "rnbqk1nr/ppppppbp/6p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 2 3",
        "commentary": "Nc3 — White develops and considers an attack. The Classical System is one of many options. White could also play f4 immediately for the Averbakh-style setup or proceed more quietly."
      },
      {
        "san": "d6",
        "fen": "rnbqk1nr/ppp1ppbp/3p2p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
        "commentary": "d6 — Black solidifies the position and prepares to castle. Now the position resembles the Pirc Defense but with the move order advantage of g6 played first, giving Black more flexibility in choosing the pawn structure."
      },
      {
        "san": "f4",
        "fen": "rnbqk1nr/ppp1ppbp/3p2p1/8/3PPP2/2N5/PPP3PP/R1BQKBNR b KQkq - 0 4",
        "commentary": "f4 — the Austrian Attack! White prepares an aggressive f5 advance, launching a direct kingside attack. This is one of the most ambitious continuations against the Modern Defense, aiming to storm Black's kingside before the position consolidates."
      },
      {
        "san": "Nf6",
        "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/3PPP2/2N5/PPP3PP/R1BQKBNR w KQkq - 1 5",
        "commentary": "Nf6 — Black develops the knight and attacks e4. The knight completes the Indian Defense setup. Now Black must deal with White's aggressive f4-f5 plan while preparing queenside counterplay. The position is rich with dynamic possibilities for both sides."
      }
    ]
  },
  {
    "id": "queens-gambit-accepted",
    "group": "Closed Games",
    "name": "Queen's Gambit Accepted",
    "description": "Black captures the c4 pawn, accepting the gambit and fighting for equality with active piece play.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — the Queen's Pawn opening, leading to the Queen's Gambit complex where Black will accept the offered pawn."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "d5 — Black meets the center with a center pawn, preparing to accept the gambit on the next move."
      },
      {
        "san": "c4",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "c4 — the Queen's Gambit! The pawn is offered as a gambit, though technically it's not a true gambit since White can often win it back with advantage."
      },
      {
        "san": "dxc4",
        "fen": "rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "dxc4 — the Queen's Gambit Accepted! Black takes the pawn, surrendering the center temporarily in exchange for active piece play. Black's plan is to develop quickly with e5 or c5 to challenge White's center before it becomes too strong."
      },
      {
        "san": "e4",
        "fen": "rnbqkbnr/ppp1pppp/8/8/2pPP3/8/PP3PPP/RNBQKBNR b KQkq - 0 3",
        "commentary": "e4 — the aggressive approach! White immediately establishes a massive pawn center. This is the most ambitious continuation — White gains central control and aims for a powerful attack. Black must react immediately to prevent White from simply dominating the game."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/ppp2ppp/8/4p3/2pPP3/8/PP3PPP/RNBQKBNR w KQkq - 0 4",
        "commentary": "e5 — Black challenges the center immediately! Rather than trying to hold the extra pawn, Black counter-attacks. This leads to very sharp and open positions. The game will be a tactical battle where both sides have dangerous attacking chances."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp2ppp/8/3Pp3/2p1P3/8/PP3PPP/RNBQKBNR b KQkq - 0 4",
        "commentary": "d5 — White advances aggressively, trying to maintain the initiative. The pawn on d5 clamps down on Black's position and creates a passed pawn. White has active piece play and central control as compensation for the gambit pawn."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/ppp2ppp/5n2/3Pp3/2p1P3/8/PP3PPP/RNBQKBNR w KQkq - 1 5",
        "commentary": "Nf6 — Black develops the knight and attacks d5. The QGA leads to very dynamic positions where Black has an extra pawn but White has superior development and central control. Accurate play from both sides is required in the complex middlegame that follows."
      }
    ]
  },
  {
    "id": "slav-defense",
    "group": "Closed Games",
    "name": "Slav Defense",
    "description": "Black supports d5 with c6 instead of e6, keeping the light-squared bishop free for active development.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — the Queen's Pawn. The Slav Defense is one of the most solid and respected defenses against the Queen's Gambit."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "d5 — Black meets the center challenge. The Slav is about to show its true character on the next move."
      },
      {
        "san": "c4",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "c4 — the Queen's Gambit offer. Black's response will define the Slav's key advantage over other Queen's Gambit defenses."
      },
      {
        "san": "c6",
        "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "c6 — the Slav Defense! Black supports d5 with the c-pawn rather than e6. This crucial difference means Black's light-squared bishop can later develop actively to f5 or g4, unlike in the French or QGD where it gets locked in. This is the Slav's primary strategic advantage."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 3",
        "commentary": "Nf3 — White develops naturally, maintaining pressure on d5 and preparing Nc3. The Slav leads to solid, rich positions where both sides have clear plans and good piece activity."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 2 4",
        "commentary": "Nf6 — Black develops the knight, the most active and principled response. Now White must decide whether to maintain the gambit tension or exchange pawns."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 3 4",
        "commentary": "Nc3 — White develops the knight and reinforces the pressure on d5. White is not in a hurry to exchange pawns and prefers to build piece pressure first. The position will become complex once Black decides how to resolve the central tension."
      },
      {
        "san": "dxc4",
        "fen": "rnbqkb1r/pp2pppp/2p2n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
        "commentary": "dxc4 — Black accepts the gambit! After dxc4, Black will try to hold the extra pawn with b5 or simply develop quickly and give it back under favorable circumstances. The Slav Gambit leads to rich tactical play where both sides must navigate carefully."
      }
    ]
  },
  {
    "id": "nimzo-indian-defense",
    "group": "Indian Defenses",
    "name": "Nimzo-Indian Defense",
    "description": "Black pins the c3 knight with Bb4 to prevent e4, one of the most theoretically rich and strategically complex defenses.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — the Queen's Pawn. The Nimzo-Indian is one of the most respected and popular defenses at grandmaster level, arising after 1.d4 Nf6 2.c4 e6 3.Nc3 Bb4."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2",
        "commentary": "Nf6 — the Indian Defense setup begins. Black signals hypermodern intentions — rather than fighting for the center with pawns, Black will control it with pieces."
      },
      {
        "san": "c4",
        "fen": "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "c4 — White expands, preparing e4. The English-QP setup creates a space advantage that Black must address carefully."
      },
      {
        "san": "e6",
        "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "e6 — Black prepares the Nimzo-Indian with the bishop check. This is a key move that opens the path for the f8 bishop to come to b4."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3",
        "commentary": "Nc3 — the required move that makes the Nimzo-Indian possible! Black will now pin this knight, preventing e4 and creating doubled pawns if White captures."
      },
      {
        "san": "Bb4",
        "fen": "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
        "commentary": "Bb4 — the Nimzo-Indian! Black pins the c3 knight against the king, preventing e4. If White plays Nge2 and then e4, the bishop can capture on c3, doubling White's pawns. This creates a rich strategic battle over pawn structure and piece activity. One of the most theoretically important moves in chess."
      },
      {
        "san": "e3",
        "fen": "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR b KQkq - 0 4",
        "commentary": "e3 — the Rubinstein System! White plays quietly, accepting that e4 will be delayed. This solid approach maintains the structural integrity and develops the bishop to e2. White will build a solid position and then gradually try to exploit Black's concession of the bishop pair."
      },
      {
        "san": "O-O",
        "fen": "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQ - 1 5",
        "commentary": "O-O — Black castles immediately, bringing the king to safety. With the king secure, Black can handle the complex middlegame with confidence. The Nimzo-Indian leads to rich strategic battles where Black's piece activity compensates for any pawn structure concessions White might create."
      }
    ]
  },
  {
    "id": "queens-indian-defense",
    "group": "Indian Defenses",
    "name": "Queen's Indian Defense",
    "description": "Black fianchettoes the queen's bishop to counter White's central control, creating a solid hypermodern structure.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — the Queen's Pawn. The Queen's Indian Defense is a response to White's 3.Nf3, specifically avoiding the Nimzo-Indian by not allowing Nc3."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2",
        "commentary": "Nf6 — the Indian Defense begins. Black keeps the game flexible, waiting to see White's third move before committing."
      },
      {
        "san": "c4",
        "fen": "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "c4 — White expands. This invites the classic Indian defenses."
      },
      {
        "san": "e6",
        "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "e6 — Black prepares the Queen's Indian. This move is also played in the Nimzo and QGD, but the key is White's next move."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 3",
        "commentary": "Nf3 — this move specifically avoids Nc3, which would allow the Nimzo-Indian. By playing Nf3, White sidesteps the pin and the Queen's Indian Defense becomes the most natural response."
      },
      {
        "san": "b6",
        "fen": "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
        "commentary": "b6 — the Queen's Indian! Black fianchettoes the queen's bishop. From b7, the bishop will powerfully control the long diagonal and fight for the center from a distance. This hypermodern strategy contests e4 without occupying the center with pawns."
      },
      {
        "san": "g3",
        "fen": "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R b KQkq - 0 4",
        "commentary": "g3 — White fianchettoes in reply! The Fianchetto Variation leads to a battle of the long diagonals, with both bishops eyeing the center from opposite wings. This is one of the main lines in the Queen's Indian and leads to deep strategic play."
      },
      {
        "san": "Bb7",
        "fen": "rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R w KQkq - 1 5",
        "commentary": "Bb7 — the Queen's Indian bishop reaches its ideal square! On b7, the bishop exerts powerful pressure along the a8-h1 diagonal. The battle for the long diagonal defines the Queen's Indian. Black's position is solid and actively placed, with excellent long-term prospects."
      }
    ]
  },
  {
    "id": "grunfeld-defense",
    "group": "Indian Defenses",
    "name": "Grünfeld Defense",
    "description": "Black allows White to build a strong pawn center then attacks it immediately with pieces, a true hypermodern masterpiece.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — the Queen's Pawn. The Grünfeld Defense is one of the most dynamic and theoretically rich defenses in chess, beloved by world champions Fischer, Kasparov, and others."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2",
        "commentary": "Nf6 — the Indian Defense. Black will allow White to build a large center and then attack it with pieces — the essence of hypermodern play."
      },
      {
        "san": "c4",
        "fen": "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "c4 — White expands, creating the English-QP setup. This gives White the option of building a massive pawn center with e4."
      },
      {
        "san": "g6",
        "fen": "rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "g6 — Black prepares the Grünfeld fianchetto. The bishop on g7 will be the most important piece in the upcoming battle, targeting the center from afar."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkb1r/pppppp1p/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3",
        "commentary": "Nc3 — White develops and prepares e4. Now the key question is: will Black prevent e4 with Nimzo (Bb4) or allow it with the Grünfeld?"
      },
      {
        "san": "d5",
        "fen": "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4",
        "commentary": "d5 — the Grünfeld Defense! Black strikes immediately in the center, allowing White to establish a powerful pawn center. The plan is deliberate: give White the center, then attack and undermine it with ...c5 and ...Nc6. A brave and dynamic strategy."
      },
      {
        "san": "cxd5",
        "fen": "rnbqkb1r/ppp1pp1p/5np1/3P4/3P4/2N5/PP2PPPP/R1BQKBNR b KQkq - 0 4",
        "commentary": "cxd5 — White accepts the central dominance. After Nxd5, White will play e4, creating a massive center. Black must act quickly to undermine these pawns before they become unstoppable."
      },
      {
        "san": "Nxd5",
        "fen": "rnbqkb1r/ppp1pp1p/6p1/3n4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 5",
        "commentary": "Nxd5 — Black recaptures, and now e4 is coming. The Grünfeld's critical moment approaches: White will have pawns on d4 and e4 controlling the center, while Black's Bg7 and pieces will try to destroy this center from the flanks. The battle of structure vs. activity begins."
      }
    ]
  },
  {
    "id": "benko-gambit",
    "group": "Indian Defenses",
    "name": "Benko Gambit",
    "description": "Black sacrifices a pawn on b5 for long-term queenside pressure and open files that are very difficult to neutralize.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — the Queen's Pawn, and Black is heading for one of the most interesting positional gambits in chess."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2",
        "commentary": "Nf6 — the Indian Defense. Black will play the Benko Gambit, offering a pawn for long-term queenside pressure."
      },
      {
        "san": "c4",
        "fen": "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "c4 — White expands. Black is about to create a very specific type of positional compensation."
      },
      {
        "san": "c5",
        "fen": "rnbqkb1r/pp1ppppp/5n2/2p5/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "c5 — Black prepares the Benko with an attack on d4. This move sets up the gambit that will follow."
      },
      {
        "san": "d5",
        "fen": "rnbqkb1r/pp1ppppp/5n2/2pP4/2P5/8/PP2PPPP/RNBQKBNR b KQkq - 0 3",
        "commentary": "d5 — White advances, creating a Benoni-style position. Now Black's gambit idea becomes clear on the next move."
      },
      {
        "san": "b5",
        "fen": "rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq - 0 4",
        "commentary": "b5 — the Benko Gambit! Black sacrifices a pawn to open the a and b files for long-term queenside pressure. This positional gambit gives Black excellent long-term compensation. The open files and the powerful bishop on g7 create enduring pressure that has troubled even world-class players."
      },
      {
        "san": "cxb5",
        "fen": "rnbqkb1r/p2ppppp/5n2/1PpP4/8/8/PP2PPPP/RNBQKBNR b KQkq - 0 4",
        "commentary": "cxb5 — White accepts the gambit. Now Black will play a6, opening the a-file. White has an extra pawn but Black gets lasting queenside pressure that is very difficult to neutralize. Many players consider this compensation more than sufficient."
      },
      {
        "san": "a6",
        "fen": "rnbqkb1r/3ppppp/p4n2/1PpP4/8/8/PP2PPPP/RNBQKBNR w KQkq - 0 5",
        "commentary": "a6 — Black immediately opens the a-file! After bxa6, Black recaptures with the bishop and has open a and b files against White's queenside. The Benko Gambit's long-term pressure is notorious — White must play very accurately just to draw with the extra pawn."
      }
    ]
  },
  {
    "id": "dutch-defense",
    "group": "Dutch & Flank d4",
    "name": "Dutch Defense",
    "description": "Black answers d4 with f5, fighting for the e4 square and setting up a kingside attack while accepting a weakened kingside.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — the Queen's Pawn. The Dutch Defense is Black's most fighting response, immediately staking a claim on the kingside."
      },
      {
        "san": "f5",
        "fen": "rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "f5 — the Dutch Defense! Black immediately fights for the e4 square and prepares kingside activity. This aggressive move creates an imbalanced position right from the start. The Dutch can lead to a classical kingside attack or the solid Stonewall setup."
      },
      {
        "san": "g3",
        "fen": "rnbqkbnr/ppppp1pp/8/5p2/3P4/6P1/PPP1PP1P/RNBQKBNR b KQkq - 0 2",
        "commentary": "g3 — White fianchettoes, preparing a powerful Bg2 bishop that will aim directly at Black's kingside weaknesses created by f5. This is the most popular anti-Dutch setup, putting maximum pressure on the f5 pawn."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/ppppp1pp/5n2/5p2/3P4/6P1/PPP1PP1P/RNBQKBNR w KQkq - 1 3",
        "commentary": "Nf6 — Black develops the knight. This leads to either the Leningrad Dutch (with g6) or the Classical Dutch (with e6). The knight on f6 controls e4 and prepares to coordinate with the f5 pawn for kingside play."
      },
      {
        "san": "Bg2",
        "fen": "rnbqkb1r/ppppp1pp/5n2/5p2/3P4/6P1/PPP1PPBP/RNBQK1NR b KQkq - 2 3",
        "commentary": "Bg2 — the fianchettoed bishop is powerfully placed, targeting f3 and creating long-diagonal pressure. White's setup is complete with d4, g3, Bg2 — a solid and active formation that challenges Black's pawn on f5."
      },
      {
        "san": "d6",
        "fen": "rnbqkb1r/ppp1p1pp/3p1n2/5p2/3P4/6P1/PPP1PPBP/RNBQK1NR w KQkq - 0 4",
        "commentary": "d6 — Black solidifies and prepares to complete kingside development. This flexible move keeps both the Leningrad and Classical setups available. Black will decide the exact pawn structure on the next few moves."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkb1r/ppp1p1pp/3p1n2/5p2/3P4/5NP1/PPP1PPBP/RNBQK2R b KQkq - 1 4",
        "commentary": "Nf3 — White develops and continues preparing to castle. The knight complements the Bg2 bishop and prepares to challenge Black's central setup. White's setup is logical and solid."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkb1r/ppp1p1pp/2np1n2/5p2/3P4/5NP1/PPP1PPBP/RNBQK2R w KQkq - 2 5",
        "commentary": "Nc6 — Black develops the knight to an active square. The Dutch positions are rich with attacking possibilities — Black typically creates kingside play while White exploits the long diagonal. A dynamic, fighting game with chances for both sides awaits."
      }
    ]
  },
  {
    "id": "trompowsky-attack",
    "group": "Closed Games",
    "name": "Trompowsky Attack",
    "description": "White plays Bg5 on move 2, attacking the f6 knight early and avoiding mainstream Indian defenses.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — the Queen's Pawn, leading to the Trompowsky Attack. White has a sharp, aggressive second move prepared."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2",
        "commentary": "Nf6 — the Indian Defense. Black attacks e4 and prepares to fight for the center. White's next move will be surprising."
      },
      {
        "san": "Bg5",
        "fen": "rnbqkb1r/pppppppp/5n2/6B1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq - 2 2",
        "commentary": "Bg5 — the Trompowsky Attack! White immediately attacks the f6 knight, either forcing concessions or creating tension. This move sidesteps all the main Indian defenses (Nimzo, Queen's Indian, King's Indian) and leads to original, less-charted territory. A weapon of surprise."
      },
      {
        "san": "Ne4",
        "fen": "rnbqkb1r/pppppppp/8/6B1/3Pn3/8/PPP1PPPP/RN1QKBNR w KQkq - 3 3",
        "commentary": "Ne4 — the most direct response! Black attacks the bishop and creates immediate tactical complications. This bold move is one of the main lines — Black says 'I'm not afraid of your bishop' and immediately counter-attacks."
      },
      {
        "san": "Bf4",
        "fen": "rnbqkb1r/pppppppp/8/8/3PnB2/8/PPP1PPPP/RN1QKBNR b KQkq - 4 3",
        "commentary": "Bf4 — the bishop retreats but maintains the initiative. White has slightly disrupted Black's development plan and the position is interesting. Alternative is h4, which leads to very sharp play."
      },
      {
        "san": "d5",
        "fen": "rnbqkb1r/ppp1pppp/8/3p4/3PnB2/8/PPP1PPPP/RN1QKBNR w KQkq - 0 4",
        "commentary": "d5 — Black fights for the center. This principled move stakes a claim in the middle and begins normal development. The Trompowsky leads to less-explored territory compared to the main Indian defenses."
      },
      {
        "san": "e3",
        "fen": "rnbqkb1r/ppp1pppp/8/3p4/3PnB2/4P3/PPP2PPP/RN1QKBNR b KQkq - 0 4",
        "commentary": "e3 — White consolidates and prepares to develop. The solid approach maintains White's slight development advantage while completing piece mobilization. White plans Bd3 and Nf3 to create piece pressure."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkb1r/ppp1pppp/2n5/3p4/3PnB2/4P3/PPP2PPP/RN1QKBNR w KQkq - 1 5",
        "commentary": "Nc6 — Black develops the knight to a strong central square. The position is approximately equal but with many interesting imbalances. The Trompowsky often leads to original middlegames outside of mainstream theory, which is exactly what White intended."
      }
    ]
  },
  {
    "id": "english-opening",
    "group": "Flank & Irregular",
    "name": "English Opening",
    "description": "White opens with c4, the English Opening, seeking queenside expansion and transposing into many different structures.",
    "moves": [
      {
        "san": "c4",
        "fen": "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "c4 — the English Opening! White stakes a claim on the d5 square without committing the center pawns yet. This flexible first move is one of the most popular choices, used regularly by Karpov, Kasparov, and many other world champions. The English can transpose into many d4 openings or remain independent."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — the most ambitious response! Black fights for the center immediately. This leads to the Reversed Sicilian — essentially a Sicilian Defense with colors reversed, where Black has an extra tempo. The resulting positions are rich and double-edged."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq - 1 2",
        "commentary": "Nc3 — White develops the knight, controlling d5 and preparing to support the c4 pawn. This natural developing move keeps the position flexible and prepares g3 for the fianchetto system or immediate central play."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq - 2 3",
        "commentary": "Nf6 — Black develops actively. This is the most natural developing move, attacking e4 and preparing kingside castle. Black is establishing a sound position with good piece activity."
      },
      {
        "san": "g3",
        "fen": "rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR b KQkq - 0 3",
        "commentary": "g3 — the classical English fianchetto! White prepares Bg2, creating a powerful bishop that will control the long diagonal. This is one of the most popular English setups, leading to rich strategic battles with slow but deep maneuvering."
      },
      {
        "san": "Bb4",
        "fen": "rnbqk2r/pppp1ppp/5n2/4p3/1bP5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq - 1 4",
        "commentary": "Bb4 — Black pins the c3 knight immediately! This aggressive response challenges White's piece coordination. The pin creates immediate tension and forces White to decide how to resolve the pressure on the c3 knight."
      },
      {
        "san": "Bg2",
        "fen": "rnbqk2r/pppp1ppp/5n2/4p3/1bP5/2N3P1/PP1PPPBP/R1BQK1NR b KQkq - 2 4",
        "commentary": "Bg2 — White completes the fianchetto. The bishop is a powerful piece on g2, controlling many central squares along the long diagonal. White continues with the planned setup regardless of the pin."
      },
      {
        "san": "O-O",
        "fen": "rnbq1rk1/pppp1ppp/5n2/4p3/1bP5/2N3P1/PP1PPPBP/R1BQK1NR w KQ - 3 5",
        "commentary": "O-O — Black castles, bringing the king to safety. The position is complex and double-edged. White has the space and the powerful Bg2, while Black has the bishop pair and active pieces. A rich strategic battle with many possibilities lies ahead for both sides."
      }
    ]
  },
  {
    "id": "reti-opening",
    "group": "Flank & Irregular",
    "name": "Réti Opening",
    "description": "White opens with Nf3 and g3, developing the kingside pieces and controlling the center from afar with a fianchettoed bishop.",
    "moves": [
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 1 1",
        "commentary": "Nf3 — the Réti Opening! Named after Czech grandmaster Richard Réti, this hypermodern move develops the knight without committing any central pawns. White will follow with a fianchetto and control the center from a distance. A deeply strategic opening beloved by positional players."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",
        "commentary": "d5 — Black takes central space. Against the Réti, taking the center is often the most principled response. White will now try to undermine this center with c4 rather than meeting it head-on with d4."
      },
      {
        "san": "g3",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq - 0 2",
        "commentary": "g3 — White prepares the fianchetto. On g2, the bishop will be perfectly placed to attack the center and exert long-range pressure. The Réti system is complete: Nf3, g3, Bg2, c4 — a modern, flexible setup."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq - 1 3",
        "commentary": "Nf6 — Black develops naturally, defending d5 and preparing to castle. Black has a solid central pawn on d5 and good development prospects. The battle will be about whether White can undermine the d5 pawn."
      },
      {
        "san": "Bg2",
        "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/8/5NP1/PPPPPPBP/RNBQK2R b KQkq - 2 3",
        "commentary": "Bg2 — the Réti bishop comes to life! On g2, this bishop is a powerful piece controlling the center and supporting c4. White's setup is harmonious and flexible, with many different plans available."
      },
      {
        "san": "e6",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/8/5NP1/PPPPPPBP/RNBQK2R w KQkq - 0 4",
        "commentary": "e6 — Black solidifies the pawn structure and prepares to develop the f8 bishop. This creates a solid defensive formation. Black can develop naturally with Be7 and 0-0, creating a reliable position."
      },
      {
        "san": "O-O",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/8/5NP1/PPPPPPBP/RNBQ1RK1 b kq - 1 4",
        "commentary": "O-O — White castles, bringing the king to safety. White's position is solid and flexible. The next move will likely be c4 or d3, beginning to put pressure on Black's center or preparing the d4 break."
      },
      {
        "san": "Be7",
        "fen": "rnbqk2r/ppp1bppp/4pn2/3p4/8/5NP1/PPPPPPBP/RNBQ1RK1 w kq - 2 5",
        "commentary": "Be7 — Black develops the bishop and prepares to castle. The position is approximately equal with both sides having solid and active setups. White will typically play c4 to challenge d5, while Black maintains the central pawn and looks for counterplay."
      }
    ]
  },
  {
    "id": "birds-opening",
    "group": "Flank & Irregular",
    "name": "Bird's Opening",
    "description": "White opens with f4, the Bird's Opening, claiming the e5 square and preparing a kingside attack with an unorthodox pawn structure.",
    "moves": [
      {
        "san": "f4",
        "fen": "rnbqkbnr/pppppppp/8/8/5P2/8/PPPPP1PP/RNBQKBNR b KQkq - 0 1",
        "commentary": "f4 — the Bird's Opening! Named after English master Henry Bird who popularized it in the 19th century. White immediately fights for the e5 square and prepares a Dutch-style formation with d3 and Nf3. This unorthodox opening is still played today and can catch unprepared opponents."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/5P2/8/PPPPP1PP/RNBQKBNR w KQkq - 0 2",
        "commentary": "d5 — the most classical response, claiming central space. Black fights for the center directly. Other options include e5 (From's Gambit) which is very sharp, or Nf6 leading to more normal development."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/5P2/5N2/PPPPP1PP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — White develops the knight and prepares e3 or g3. The Bird's Opening can be played as a reversed Dutch Defense or as an independent system. The knight on f3 controls the center and prepares to support kingside play."
      },
      {
        "san": "g6",
        "fen": "rnbqkbnr/ppp1pp1p/6p1/3p4/5P2/5N2/PPPPP1PP/RNBQKB1R w KQkq - 0 3",
        "commentary": "g6 — Black prepares the fianchetto, meeting White's bird with a hypermodern setup. This creates a complex asymmetric battle where both sides have their own plans and counterplay."
      },
      {
        "san": "e3",
        "fen": "rnbqkbnr/ppp1pp1p/6p1/3p4/5P2/4PN2/PPPP2PP/RNBQKB1R b KQkq - 0 3",
        "commentary": "e3 — White solidifies the position and prepares to develop the dark-squared bishop. This solid approach keeps White's pawn structure intact and prepares Be2 for quick castling."
      },
      {
        "san": "Bg7",
        "fen": "rnbqk1nr/ppp1ppbp/6p1/3p4/5P2/4PN2/PPPP2PP/RNBQKB1R w KQkq - 1 4",
        "commentary": "Bg7 — the fianchettoed bishop is powerfully placed, attacking the long diagonal. Black's setup is solid and flexible, with the bishop creating counterplay against White's center."
      },
      {
        "san": "Be2",
        "fen": "rnbqk1nr/ppp1ppbp/6p1/3p4/5P2/4PN2/PPPPB1PP/RNBQK2R b KQkq - 2 4",
        "commentary": "Be2 — developing and preparing to castle. White's position is solid if slightly unorthodox. The f4 pawn is both a strength and a potential weakness — it controls e5 but leaves the kingside slightly exposed."
      },
      {
        "san": "Nf6",
        "fen": "rnbqk2r/ppp1ppbp/5np1/3p4/5P2/4PN2/PPPPB1PP/RNBQK2R w KQkq - 3 5",
        "commentary": "Nf6 — Black completes development with the knight, attacking e4 (which doesn't exist here) and preparing to castle. The position is interesting with both sides having distinctive setups. White aims for e5 as an outpost while Black prepares central counterplay with c5 or e5."
      }
    ]
  },
  {
    "id": "sicilian-najdorf",
    "group": "Semi-Open Games",
    "name": "Sicilian Najdorf",
    "description": "The most popular Sicilian variation — Black plays a6 to gain queenside space and flexibility while fighting for the initiative.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Najdorf is one of the most deeply analyzed openings in chess, a favorite of Fischer and Kasparov."
      },
      {
        "san": "c5",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "c5 — the Sicilian Defense begins. Black fights for the center asymmetrically, setting up the rich counterplay that the Najdorf will develop."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — the main line Sicilian. White prepares d4 and the Open Sicilian, the most theoretically rich path."
      },
      {
        "san": "d6",
        "fen": "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
        "commentary": "d6 — Black prepares to develop Nf6 without allowing e5. This prepares the Najdorf or Classical Sicilian depending on Black's fifth move."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
        "commentary": "d4 — the critical central break! White opens the center and gains a strong initiative. After the exchange, the Sicilian pawn structure defines both sides' plans."
      },
      {
        "san": "cxd4",
        "fen": "rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
        "commentary": "cxd4 — Black exchanges, opening the c-file. The characteristic Sicilian imbalance is created: White's central majority against Black's queenside activity."
      },
      {
        "san": "Nxd4",
        "fen": "rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
        "commentary": "Nxd4 — the knight centralizes powerfully. Now Black must choose the variation — the Najdorf's a6 is coming."
      },
      {
        "san": "a6",
        "fen": "rnbqkbnr/1p2pppp/p2p4/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5",
        "commentary": "a6 — the Najdorf! This modest-looking move has profound strategic importance. Named after Miguel Najdorf, it prevents Bb5+ and prepares b5. It's the most popular Sicilian move at every level, creating maximum flexibility and counterplay. Fischer called it 'best by test' and Kasparov played it in many world championship matches."
      }
    ]
  },
  {
    "id": "sicilian-dragon",
    "group": "Semi-Open Games",
    "name": "Sicilian Dragon",
    "description": "Black fianchettoes the kingside bishop on g7, creating the 'Dragon' — one of the sharpest and most analyzed openings in chess.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Dragon is considered one of the sharpest and most dangerous opening systems, a double-edged weapon for Black."
      },
      {
        "san": "c5",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "c5 — the Sicilian. Black prepares to fight for the center asymmetrically, setting up the conditions for the Dragon's characteristic pawn structure."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — White develops and prepares d4. The main line Sicilian where d4 creates the Open Sicilian."
      },
      {
        "san": "d6",
        "fen": "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
        "commentary": "d6 — Black plays the Classical Sicilian setup. The Dragon variation will emerge with Nf6 followed by g6."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
        "commentary": "d4 — the critical central break. After cxd4 Nxd4, the position reaches the key Sicilian junction."
      },
      {
        "san": "cxd4",
        "fen": "rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
        "commentary": "cxd4 — Black opens the c-file. The Dragon's characteristic pawn structure is taking shape."
      },
      {
        "san": "Nxd4",
        "fen": "rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
        "commentary": "Nxd4 — the knight dominates the center. Now Black plays Nf6, and after Nc3, the Dragon's g6 defines the variation."
      },
      {
        "san": "g6",
        "fen": "rnbqkbnr/pp2pp1p/3p2p1/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5",
        "commentary": "g6 — the Dragon! Black prepares the fianchetto, and the bishop on g7 will be the Dragon's namesake — a powerful piece that breathes fire along the long diagonal. The Dragon leads to incredibly sharp games, particularly after the Yugoslav Attack with f3, Be3, Qd2, and O-O-O."
      }
    ]
  },
  {
    "id": "sicilian-scheveningen",
    "group": "Semi-Open Games",
    "name": "Sicilian Scheveningen",
    "description": "Black builds a flexible pawn structure with d6 and e6, keeping options open while fighting for the center.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the start of the Scheveningen, one of the most solid and flexible Sicilian variations."
      },
      {
        "san": "c5",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "c5 — the Sicilian begins. The Scheveningen will take shape with a specific pawn structure."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — White develops and prepares d4, the critical central advance in the Open Sicilian."
      },
      {
        "san": "d6",
        "fen": "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
        "commentary": "d6 — Black prepares to develop without allowing e5. This move is consistent with several Sicilian variations."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
        "commentary": "d4 — the central break. After the pawn exchange, the Scheveningen's key move e6 will define the variation."
      },
      {
        "san": "cxd4",
        "fen": "rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
        "commentary": "cxd4 — Black opens the c-file, creating the standard Sicilian pawn structure."
      },
      {
        "san": "Nxd4",
        "fen": "rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
        "commentary": "Nxd4 — the knight centralizes. Now the Scheveningen's defining move follows."
      },
      {
        "san": "e6",
        "fen": "rnbqkbnr/pp3ppp/3pp3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5",
        "commentary": "e6 — the Scheveningen! This creates a solid, flexible pawn structure with d6 and e6. The small center is resilient, and Black can develop on both wings. Named after the Dutch seaside town where the 1923 tournament was held, this was a favorite of many world champions including Fischer and Kasparov."
      }
    ]
  },
  {
    "id": "ruy-lopez-berlin",
    "group": "Open Games",
    "name": "Ruy Lopez: Berlin Defense",
    "description": "The Berlin Defense — Black develops the knight to f6 attacking e4, leading to the famous 'Berlin Endgame' after White castles and Black captures on e4.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn, and we're heading for one of the most theoretically explored variations in modern top-level chess."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black mirrors the center. The Berlin Defense will arise from this classical symmetry."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — developing with tempo, attacking e5. White sets up the Ruy Lopez bishop move on the next turn."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nc6 — defending e5 while developing. This leads to the main Ruy Lopez complex."
      },
      {
        "san": "Bb5",
        "fen": "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
        "commentary": "Bb5 — the Spanish bishop! White pins the c6 knight and pressures the center. Now Black chooses between a6 (Morphy Defense) or Nf6 (the Berlin)."
      },
      {
        "san": "Nf6",
        "fen": "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
        "commentary": "Nf6 — the Berlin Defense! Black counter-attacks e4 immediately rather than playing a6. This move was considered harmless for decades but became the most solid equalizing weapon at world championship level after Kramnik used it against Kasparov in 2000."
      },
      {
        "san": "O-O",
        "fen": "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 5 4",
        "commentary": "O-O — White castles, a key move. Rather than defending e4, White allows the knight to take it. After O-O, the Berlin Endgame arises: Black takes on e4, White attacks the knight, and after a forced sequence queens come off the board, leading to a legendary endgame battle."
      },
      {
        "san": "Nxe4",
        "fen": "r1bqkb1r/pppp1ppp/2n5/1B2p3/4n3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 5",
        "commentary": "Nxe4 — Black captures the e4 pawn! The Berlin Endgame begins. After d4 d6 Bxc6+ dxc6 dxe5 Nf6+ Qxd8+ Kxd8, queens are exchanged early. Black has doubled pawns but active pieces. World champions have battled in this endgame for decades — it's one of the most analyzed positions in chess."
      }
    ]
  },
  {
    "id": "ruy-lopez-exchange",
    "group": "Open Games",
    "name": "Ruy Lopez: Exchange Variation",
    "description": "White captures on c6 immediately, giving Black doubled pawns in exchange for the bishop pair and a long-term endgame advantage.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. White heads for the Exchange Variation of the Ruy Lopez, one of the most direct and strategically clear variations."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black occupies the center. The Exchange Ruy Lopez arises when White decides to trade the bishop for the knight immediately."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — developing with tempo. The standard Ruy Lopez setup begins."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nc6 — defending e5 naturally. Black is set up for the main Ruy Lopez when White springs the Exchange Variation."
      },
      {
        "san": "Bb5",
        "fen": "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
        "commentary": "Bb5 — the Spanish bishop takes aim at the c6 knight. The Exchange Variation is now just one move away."
      },
      {
        "san": "a6",
        "fen": "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
        "commentary": "a6 — Black challenges the bishop, expecting Ba4. But White has other plans — the immediate exchange!"
      },
      {
        "san": "Bxc6",
        "fen": "r1bqkbnr/1ppp1ppp/p1B5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 4",
        "commentary": "Bxc6 — the Exchange Variation! White immediately takes the knight, giving Black doubled pawns. White sacrifices the bishop for a knight and gives Black the bishop pair. The compensation is a long-term structural advantage: Black's doubled c-pawns are a permanent weakness that must be nursed into a winning endgame."
      },
      {
        "san": "dxc6",
        "fen": "r1bqkbnr/1pp2ppp/p1p5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5",
        "commentary": "dxc6 — Black recaptures with the d-pawn, opening the d-file and the diagonal for the dark-squared bishop. Black has the bishop pair and active piece play, but the doubled c-pawns will be a target for the rest of the game. Fischer famously played this as White, grinding out many famous endgame victories."
      }
    ]
  },
  {
    "id": "ruy-lopez-closed",
    "group": "Open Games",
    "name": "Ruy Lopez: Closed",
    "description": "The main line of the Ruy Lopez — Black reinforces e5 with Be7 while White prepares the long-term c3-d4 pawn center.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn, beginning the most deeply analyzed opening system in chess history."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black meets the center challenge directly, setting up the classical open game."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — developing with tempo, attacking e5 and preparing the Ruy Lopez bishop."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nc6 — defending e5 while developing the knight to its best square."
      },
      {
        "san": "Bb5",
        "fen": "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
        "commentary": "Bb5 — the Spanish bishop! White pins the c6 knight and applies indirect pressure on e5."
      },
      {
        "san": "a6",
        "fen": "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
        "commentary": "a6 — the Morphy Defense. Black immediately challenges the bishop, forcing White to declare intentions."
      },
      {
        "san": "Ba4",
        "fen": "r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 4",
        "commentary": "Ba4 — White retreats, maintaining the pin. The tension is kept alive. Now the Closed Ruy Lopez begins in earnest — the most important and deeply analyzed opening in all of chess history."
      },
      {
        "san": "Be7",
        "fen": "r1bqk1nr/1pppbppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5",
        "commentary": "Be7 — a key move in the Closed Ruy Lopez! Black develops the bishop and prepares to castle. This solid approach leads to the main Closed Ruy Lopez where White will play O-O, Re1, c3, d4 while Black counters with ...b5, ...d6, and the thematic ...Na5 or ...Nb8-d7. Decades of theoretical battles follow from here."
      }
    ]
  },
  {
    "id": "ruy-lopez-marshall",
    "group": "Open Games",
    "name": "Ruy Lopez: Marshall Attack",
    "description": "Black sacrifices a pawn on move 9 with d5 to launch a fierce kingside attack — one of the most deeply prepared gambits in chess.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Marshall Attack is one of the most heavily analyzed gambits in chess, requiring knowledge of theory up to move 20+."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black mirrors the center, heading for the Ruy Lopez main line that will eventually diverge into the Marshall."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — developing with tempo. The standard Ruy Lopez setup begins."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nc6 — defending e5. Both sides are following the main Ruy Lopez path."
      },
      {
        "san": "Bb5",
        "fen": "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
        "commentary": "Bb5 — the Spanish bishop. White is heading into the most theoretically rich continuation."
      },
      {
        "san": "a6",
        "fen": "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
        "commentary": "a6 — the Morphy Defense, keeping maximum tension. Black is following the exact path that will later lead to the Marshall sacrifice."
      },
      {
        "san": "Ba4",
        "fen": "r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 4",
        "commentary": "Ba4 — White maintains the pin. This position will evolve through O-O, Be7, Re1, b5, Bb3, O-O, c3 before Black unleashes the Marshall pawn sacrifice with d5, giving up a pawn for a fierce kingside attack."
      },
      {
        "san": "Nf6",
        "fen": "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5",
        "commentary": "Nf6 — Black develops actively, attacking e4. The game is now on the main Ruy Lopez highway. After 5.O-O Be7 6.Re1 b5 7.Bb3 O-O 8.c3, Black will unleash the legendary Marshall Attack: 8...d5! sacrificing a pawn for a ferocious kingside assault that has been in the top-level repertoire for over 100 years."
      }
    ]
  },
  {
    "id": "giuoco-piano",
    "group": "Open Games",
    "name": "Giuoco Piano",
    "description": "The 'Quiet Game' — both sides develop naturally with bishops on c4 and c5 before White plays c3 preparing d4.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn, one of the oldest and most popular openings in chess history."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black mirrors the center. The Giuoco Piano is one of the oldest recorded openings, with games dating back to the 16th century."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — developing with tempo, attacking e5. White builds toward the Italian Game complex."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nc6 — defending e5 while developing. Both sides are following the most classical development principles."
      },
      {
        "san": "Bc4",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
        "commentary": "Bc4 — the Italian bishop! The bishop aims at the critical f7 square and prepares to participate in the center battle. This is one of the oldest developing moves in chess — the Via Italiana."
      },
      {
        "san": "Bc5",
        "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
        "commentary": "Bc5 — Black mirrors the strategy with an equally active bishop! Both bishops eye the opponent's f2/f7 weaknesses. The position is completely symmetrical and balanced — the 'Quiet Game' (Giuoco Piano in Italian) begins."
      },
      {
        "san": "c3",
        "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 0 4",
        "commentary": "c3 — White prepares d4! This is the Giuoco Piano's characteristic move, building a strong pawn center. White plans c3-d4, challenging Black's bishop and gaining central space. The position transitions from symmetrical to dynamic."
      },
      {
        "san": "Nf6",
        "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5",
        "commentary": "Nf6 — Black counter-attacks e4 rather than waiting for White's d4! This aggressive developing move creates immediate pressure. The Giuoco Piano now branches into many rich variations — from the quiet Giuoco Pianissimo with d3 to the sharp tactical battles after d4 and center opens."
      }
    ]
  },
  {
    "id": "fried-liver-attack",
    "group": "Open Games",
    "name": "Fried Liver Attack",
    "description": "White sacrifices the knight on f7 in the Two Knights Defense for a ferocious attack on the exposed Black king.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn, leading to one of the most explosive and entertaining attacking combinations in all of chess theory."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black occupies the center. The Fried Liver Attack will arise from the Italian Game / Two Knights complex."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — White develops toward the Italian Game setup."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nc6 — Black defends e5. The stage is set for the Italian Game."
      },
      {
        "san": "Bc4",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
        "commentary": "Bc4 — the Italian bishop targets f7. This is the starting point for the Fried Liver Attack after Black plays Nf6."
      },
      {
        "san": "Nf6",
        "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
        "commentary": "Nf6 — the Two Knights Defense! Black counter-attacks e4, inviting the legendary Fried Liver. Rather than the solid Bc5, Black immediately counter-attacks, accepting the risk of White's coming sacrifice."
      },
      {
        "san": "Ng5",
        "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p1N1/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 5 4",
        "commentary": "Ng5 — the attack begins! White threatens Nxf7 immediately, forking queen and rook. Black must respond carefully — d5 is the only good reply, creating counter-threats in the center."
      },
      {
        "san": "d5",
        "fen": "r1bqkb1r/ppp2ppp/2n2n2/3pp1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 0 5",
        "commentary": "d5 — the only good response! Black counter-attacks immediately. After exd5 Nxd5, White plays Nxf7! — the Fried Liver Attack! The knight sacrifice on f7 opens the king and forces it forward. After ...Kxf7 Qf3+ Ke6 Nc3, White has a ferocious attack that has terrified players since the 16th century."
      }
    ]
  },
  {
    "id": "danish-gambit",
    "group": "Open Games",
    "name": "Danish Gambit",
    "description": "White sacrifices two pawns for rapid development and devastating diagonal attacks with both bishops.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn, beginning one of the most aggressive gambits from the 19th century romantic era."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black establishes a central pawn. The Danish Gambit will offer not one but two pawns for a ferocious attack."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — the first pawn offer! White immediately challenges the center. After the exchange, White will offer a second pawn for devastating development."
      },
      {
        "san": "exd4",
        "fen": "rnbqkbnr/pppp1ppp/8/8/3pP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "exd4 — Black accepts the first pawn. Now White will offer a second pawn to gain even more development and open the diagonals for the bishops."
      },
      {
        "san": "c3",
        "fen": "rnbqkbnr/pppp1ppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR b KQkq - 0 3",
        "commentary": "c3 — the Danish Gambit! White offers a second pawn. If Black takes again, White gets both bishops on raking diagonals with tremendous attacking power. This gambit was a feared weapon in the 19th century, popularized in Danish chess circles."
      },
      {
        "san": "dxc3",
        "fen": "rnbqkbnr/pppp1ppp/8/8/4P3/2p5/PP3PPP/RNBQKBNR w KQkq - 0 4",
        "commentary": "dxc3 — Black accepts the second pawn! Now White has lost two pawns but gains rapid development. The bishops will spring to c4 and b2, creating powerful pressure along the a2-g8 and b2-g7 diagonals."
      },
      {
        "san": "Bc4",
        "fen": "rnbqkbnr/pppp1ppp/8/8/2B1P3/2p5/PP3PPP/RNBQK1NR b KQkq - 1 4",
        "commentary": "Bc4 — the first bishop springs to life! Aimed at f7, creating immediate threats. White's development is now racing ahead. After Nxc3, the b2 bishop will complete the battery, and Black must play very carefully to avoid a devastating early attack."
      },
      {
        "san": "cxb2",
        "fen": "rnbqkbnr/pppp1ppp/8/8/2B1P3/8/Pp3PPP/RNBQK1NR w KQkq - 0 5",
        "commentary": "cxb2 — Black captures the third pawn! Now White plays Bxb2 and has two ferociously active bishops aimed at the heart of Black's position. White has sacrificed three pawns for a complete development lead and attacking chances that have broken many kings throughout history."
      }
    ]
  },
  {
    "id": "center-game",
    "group": "Open Games",
    "name": "Center Game",
    "description": "White opens the center with d4 on move 2 and recaptures with the queen, gaining a central queen but losing time when it's attacked.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Center Game is one of the oldest openings, an ambitious attempt to immediately control the center with pawns."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black mirrors the center. The Center Game will open the position dramatically on White's next move."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — the Center Game! White immediately challenges the center on move 2. This is more direct than the Scotch (which waits until move 3). After exd4, White has the choice of the Danish Gambit (c3) or recapturing with the queen."
      },
      {
        "san": "exd4",
        "fen": "rnbqkbnr/pppp1ppp/8/8/3pP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "exd4 — Black captures, opening the center. Now White must decide: recapture with the queen (Center Game) or offer the Danish Gambit with c3."
      },
      {
        "san": "Qxd4",
        "fen": "rnbqkbnr/pppp1ppp/8/8/3QP3/8/PPP2PPP/RNB1KBNR b KQkq - 0 3",
        "commentary": "Qxd4 — the Center Game proper! White recaptures with the queen, placing it on a dominant central square. However, the queen will soon be attacked, costing White time. This is why the Center Game is considered somewhat dubious — White gains a central queen but loses developing tempo."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pppp1ppp/2n5/8/3QP3/8/PPP2PPP/RNB1KBNR w KQkq - 1 4",
        "commentary": "Nc6 — Black attacks the queen! This developing move gains tempo immediately. White must move the queen again, giving Black a free developing move. The queen's early foray into the center is being punished according to classical opening principles."
      },
      {
        "san": "Qe3",
        "fen": "r1bqkbnr/pppp1ppp/2n5/8/4P3/4Q3/PPP2PPP/RNB1KBNR b KQkq - 2 4",
        "commentary": "Qe3 — the queen retreats to e3, keeping pressure on the e-file and supporting the center. This is the main line in the Center Game. The queen on e3 eyes the a7-g1 diagonal and supports a possible kingside attack, though it remains somewhat exposed."
      },
      {
        "san": "Nf6",
        "fen": "r1bqkb1r/pppp1ppp/2n2n2/8/4P3/4Q3/PPP2PPP/RNB1KBNR w KQkq - 3 5",
        "commentary": "Nf6 — Black develops with tempo, attacking e4. The position is roughly equal. Black has a comfortable game with active pieces and the advantage of having gained a tempo through Nc6. The Center Game rarely leads to White getting an advantage — it's mostly played as a surprise weapon."
      }
    ]
  },
  {
    "id": "max-lange-attack",
    "group": "Open Games",
    "name": "Max Lange Attack",
    "description": "White sacrifices a pawn with d4 in the Two Knights/Italian complex to create a powerful central initiative.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn, leading to the Max Lange Attack, one of the most tactically complex openings of the 19th century."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black occupies the center. The Max Lange Attack arises from the Italian Game when Black develops the knight to f6."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — developing with tempo. White is setting up the Italian Game structure."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nc6 — Black defends e5. The Italian Game complex begins."
      },
      {
        "san": "Bc4",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
        "commentary": "Bc4 — the Italian bishop! White aims at f7 and sets up for the Max Lange Attack's central pawn break."
      },
      {
        "san": "Nf6",
        "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
        "commentary": "Nf6 — Black develops aggressively with the Two Knights Defense. Now the Max Lange Attack begins!"
      },
      {
        "san": "d4",
        "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R b KQkq - 0 4",
        "commentary": "d4 — the Max Lange pawn thrust! White immediately strikes in the center, offering a pawn. If Black takes, White will play e5 (driving the knight) and Bxd4 with a powerful central initiative and attacking chances reminiscent of the Scotch Gambit."
      },
      {
        "san": "exd4",
        "fen": "r1bqkb1r/pppp1ppp/2n2n2/8/2BpP3/5N2/PPP2PPP/RNBQK2R w KQkq - 0 5",
        "commentary": "exd4 — Black accepts! Now after 5.O-O (not immediately e5) Bc5 6.e5 d5 7.exf6 dxc4, the Max Lange Attack proper begins. White has sacrificed material for rapid development and a fierce attacking position. The resulting complications have been analyzed for over 150 years."
      }
    ]
  },
  {
    "id": "goring-gambit",
    "group": "Open Games",
    "name": "Göring Gambit",
    "description": "A Scotch Gambit where White offers a pawn after d4 exd4 with c3, gaining rapid development and a dangerous initiative.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Göring Gambit is an aggressive attacking system within the Scotch Game."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black establishes a central pawn. The Scotch Game complex will arise after White's next moves."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — developing with tempo. White is heading for the Scotch Game setup."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nc6 — Black defends e5 while developing. White now plays d4, entering the Scotch Game."
      },
      {
        "san": "d4",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
        "commentary": "d4 — the Scotch Game! White immediately challenges Black's center, aiming for rapid piece activity."
      },
      {
        "san": "exd4",
        "fen": "r1bqkbnr/pppp1ppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
        "commentary": "exd4 — Black captures in the center. White could recapture with the knight (Scotch Game) but instead plays the Göring Gambit!"
      },
      {
        "san": "c3",
        "fen": "r1bqkbnr/pppp1ppp/2n5/8/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq - 0 4",
        "commentary": "c3 — the Göring Gambit! White offers a pawn for rapid development, similar to the Danish Gambit but in the Scotch Game context. If Black accepts with dxc3, White plays Nxc3 with all pieces developed and dangerous attacking chances. Named after Carl Theodor Göring who analyzed it extensively in the 1870s."
      },
      {
        "san": "dxc3",
        "fen": "r1bqkbnr/pppp1ppp/2n5/8/4P3/2p2N2/PP3PPP/RNBQKB1R w KQkq - 0 5",
        "commentary": "dxc3 — Black accepts! After Nxc3, White has a fully developed position with open lines and attacking chances. Black has the extra pawn but must defend carefully. White's pieces will quickly target f7 and control the center. The Göring Gambit leads to sharp, unbalanced play where White's initiative can be very dangerous."
      }
    ]
  },
  {
    "id": "hungarian-defense",
    "group": "Open Games",
    "name": "Hungarian Defense",
    "description": "Black develops the bishop to e7 rather than c5 in the Italian Game, choosing solidity over counterattacking chances.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn, leading to the Italian Game complex where Black will choose the solid Hungarian Defense."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black occupies the center. The Italian Game complex begins."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — developing with tempo. White prepares the Italian bishop to c4."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nc6 — Black defends e5. After Bc4, Black has multiple choices — the solid Be7 (Hungarian) is one of them."
      },
      {
        "san": "Bc4",
        "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
        "commentary": "Bc4 — the Italian bishop takes aim at f7. Now Black must decide: the fighting Bc5 or Nf6, or the solid Hungarian Defense with Be7."
      },
      {
        "san": "Be7",
        "fen": "r1bqk1nr/ppppbppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
        "commentary": "Be7 — the Hungarian Defense! Black develops the bishop modestly, avoiding the sharp complications of Bc5 or Nf6. This solid but somewhat passive move was popular in the 19th century. Black accepts a slightly cramped position in exchange for a very solid structure with no immediate weaknesses."
      },
      {
        "san": "d4",
        "fen": "r1bqk1nr/ppppbppp/2n5/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R b KQkq - 0 4",
        "commentary": "d4 — White seizes the center! With Black's bishop passively placed on e7, White can immediately build a powerful central presence. This is the critical test of the Hungarian Defense."
      },
      {
        "san": "d6",
        "fen": "r1bqk1nr/ppp1bppp/2np4/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R w KQkq - 0 5",
        "commentary": "d6 — Black solidifies the position. The Hungarian Defense leads to solid but passive positions for Black. While it avoids sharp theory, Black must be careful not to fall too far behind in the center and activity. A patient, strategic game lies ahead."
      }
    ]
  },
  {
    "id": "sicilian-sveshnikov",
    "group": "Semi-Open Games",
    "name": "Sicilian Sveshnikov",
    "description": "Black plays e5 early to seize space and create dynamic imbalances, accepting a backward d6 pawn and the d5 outpost for powerful piece activity.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn, heading for one of the most dynamic and theoretically challenging Sicilian variations."
      },
      {
        "san": "c5",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "c5 — the Sicilian. Black fights for the d4 square asymmetrically, setting up the Sveshnikov's rich counterplay."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — White develops and prepares d4. The Open Sicilian begins."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nc6 — Black develops the knight. The Sveshnikov requires Nc6 early, supporting the coming e5 advance."
      },
      {
        "san": "d4",
        "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
        "commentary": "d4 — the critical pawn break. White opens the center and the Sicilian imbalance is created."
      },
      {
        "san": "cxd4",
        "fen": "r1bqkbnr/pp1ppppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
        "commentary": "cxd4 — Black exchanges, opening the c-file. The characteristic Sicilian pawn structure emerges."
      },
      {
        "san": "Nxd4",
        "fen": "r1bqkbnr/pp1ppppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
        "commentary": "Nxd4 — White centralizes the knight powerfully. Now Black plays Nf6 and after Nc3, the Sveshnikov's defining e5 thrust follows."
      },
      {
        "san": "Nf6",
        "fen": "r1bqkb1r/pp1ppppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
        "commentary": "Nf6 — developing and attacking e4. After 5.Nc3, Black plays the defining move 5...e5! — the Sveshnikov! This bold advance accepts a backward d6 pawn and gives White the strong d5 outpost, but in return Black gets powerful piece activity and the e5 space. A favorite of Leko, Carlsen, and many modern elite players."
      }
    ]
  },
  {
    "id": "sicilian-kan",
    "group": "Semi-Open Games",
    "name": "Sicilian Kan",
    "description": "Black plays a6 to gain queenside flexibility, avoiding commitment to a specific pawn structure while maintaining maximum options.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Kan Sicilian (also called the Paulsen Variation) is one of Black's most flexible responses in the Sicilian."
      },
      {
        "san": "c5",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "c5 — the Sicilian begins. Black will reach the Kan by combining c5 with e6 and a6."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — White develops and prepares d4 for the Open Sicilian."
      },
      {
        "san": "e6",
        "fen": "rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
        "commentary": "e6 — Black's first defining move for the Kan. This solid pawn move prepares d5 and keeps the pawn structure flexible."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pp1p1ppp/4p3/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
        "commentary": "d4 — the central break. The Open Sicilian pawn structure is created after the exchange."
      },
      {
        "san": "cxd4",
        "fen": "rnbqkbnr/pp1p1ppp/4p3/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
        "commentary": "cxd4 — Black opens the c-file. The Sicilian imbalance is established."
      },
      {
        "san": "Nxd4",
        "fen": "rnbqkbnr/pp1p1ppp/4p3/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
        "commentary": "Nxd4 — White centralizes the knight. Now Black's choice of a6 will define the Kan."
      },
      {
        "san": "a6",
        "fen": "rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5",
        "commentary": "a6 — the Kan Sicilian! This flexible pawn move prepares b5 and keeps all options open. Unlike the Najdorf (where d6 is already played), the Kan with e6 gives Black maximum flexibility — the position can transpose to Taimanov, Scheveningen, or remain as a pure Kan. A favorite of subtle positional players."
      }
    ]
  },
  {
    "id": "sicilian-taimanov",
    "group": "Semi-Open Games",
    "name": "Sicilian Taimanov",
    "description": "Black combines e6 and Nc6 for a flexible Sicilian setup that avoids the sharpest theory while maintaining solid counterplay.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Taimanov Sicilian (named after Soviet grandmaster Mark Taimanov) combines the flexibility of e6 with the development of Nc6."
      },
      {
        "san": "c5",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "c5 — the Sicilian begins. The Taimanov will combine c5, e6, and Nc6."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — developing and preparing the d4 break."
      },
      {
        "san": "e6",
        "fen": "rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
        "commentary": "e6 — Black prepares the Taimanov structure. The pawn on e6 supports d5 and keeps the position solid."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pp1p1ppp/4p3/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
        "commentary": "d4 — the central break. White opens the center and gains a strong initiative."
      },
      {
        "san": "cxd4",
        "fen": "rnbqkbnr/pp1p1ppp/4p3/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
        "commentary": "cxd4 — Black exchanges, opening the c-file for long-term queenside pressure."
      },
      {
        "san": "Nxd4",
        "fen": "rnbqkbnr/pp1p1ppp/4p3/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
        "commentary": "Nxd4 — White centralizes the knight on a dominant square. The Sicilian structure is established."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pp1p1ppp/2n1p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
        "commentary": "Nc6 — the Taimanov! Black develops the knight to c6, creating a solid and flexible position. Unlike the Najdorf or Dragon, the Taimanov avoids many of the sharpest theoretical battles. Black can develop on both wings, and the position can take many different forms. A favorite of players who want a rich game without extreme theoretical demands."
      }
    ]
  },
  {
    "id": "sicilian-accelerated-dragon",
    "group": "Semi-Open Games",
    "name": "Sicilian Accelerated Dragon",
    "description": "Black fianchettoes on g6 before playing d6, 'accelerating' the Dragon setup and avoiding the Yugoslav Attack.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Accelerated Dragon is Black's way of getting the Dragon bishop without allowing the Yugoslav Attack."
      },
      {
        "san": "c5",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "c5 — the Sicilian begins. The Accelerated Dragon will develop with g6 before d6."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — White develops and prepares d4 for the Open Sicilian."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
        "commentary": "Nc6 — Black develops the knight. In the Accelerated Dragon, Nc6 precedes d6."
      },
      {
        "san": "d4",
        "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
        "commentary": "d4 — the central break creates the Open Sicilian structure."
      },
      {
        "san": "cxd4",
        "fen": "r1bqkbnr/pp1ppppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
        "commentary": "cxd4 — Black exchanges, opening the c-file. The Sicilian imbalance is established."
      },
      {
        "san": "Nxd4",
        "fen": "r1bqkbnr/pp1ppppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
        "commentary": "Nxd4 — White centralizes the knight. Now Black plays g6 to 'accelerate' the Dragon."
      },
      {
        "san": "g6",
        "fen": "r1bqkbnr/pp1ppp1p/2n3p1/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5",
        "commentary": "g6 — the Accelerated Dragon! Black prepares the fianchetto immediately, without playing d6 first. The key advantage: this move order avoids the Yugoslav Attack (since White's f3+Be3+Qd2+O-O-O setup requires Black to have played d6). The position is similar to the regular Dragon but with important differences — Black can play d5 in one move, often creating tactical shots that don't exist in the regular Dragon."
      }
    ]
  },
  {
    "id": "sicilian-alapin",
    "group": "Semi-Open Games",
    "name": "Sicilian Alapin",
    "description": "White plays c3 on move 2, avoiding Open Sicilian theory and preparing a strong center with d4.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Alapin Variation is a popular anti-Sicilian weapon that avoids the massive theory of the Open Sicilian."
      },
      {
        "san": "c5",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "c5 — the Sicilian Defense. Black fights for d4 asymmetrically, but White has a specific plan to avoid the main lines."
      },
      {
        "san": "c3",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "c3 — the Alapin Variation (named after Semyon Alapin)! White prepares d4 with pawn support, planning to build a strong center without playing Nf3 first. This avoids the Open Sicilian entirely. White will play d4 and after the exchange, have a supported central pawn."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/pp2pppp/8/2pp4/4P3/2P5/PP1P1PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "d5 — the most principled response! Black immediately counter-attacks in the center. This is the most direct challenge — rather than allowing White to build a comfortable center, Black fights for d4 immediately with d5."
      },
      {
        "san": "exd5",
        "fen": "rnbqkbnr/pp2pppp/8/2pP4/8/2P5/PP1P1PPP/RNBQKBNR b KQkq - 0 3",
        "commentary": "exd5 — White accepts the central exchange. The position opens up dramatically."
      },
      {
        "san": "Qxd5",
        "fen": "rnb1kbnr/pp2pppp/8/2pq4/8/2P5/PP1P1PPP/RNBQKBNR w KQkq - 0 4",
        "commentary": "Qxd5 — Black recaptures with the queen, gaining central control. In the Alapin, this queen development is actually quite good — unlike in the Scandinavian, Black's queen on d5 is hard to attack immediately."
      },
      {
        "san": "d4",
        "fen": "rnb1kbnr/pp2pppp/8/2pq4/3P4/2P5/PP3PPP/RNBQKBNR b KQkq - 0 4",
        "commentary": "d4 — White builds the center. This is the whole point of c3 — a supported d4 pawn. The position is dynamic with open lines and piece activity."
      },
      {
        "san": "Nf6",
        "fen": "rnb1kb1r/pp2pppp/5n2/2pq4/3P4/2P5/PP3PPP/RNBQKBNR w KQkq - 1 5",
        "commentary": "Nf6 — Black develops actively and continues the center battle. The Alapin leads to original positions outside mainstream Sicilian theory. White has a solid center but Black has active pieces and counterplay. The resulting positions are rich and complex, a favorite weapon for players who want to fight for an advantage without memorizing massive amounts of Sicilian theory."
      }
    ]
  },
  {
    "id": "sicilian-smith-morra",
    "group": "Semi-Open Games",
    "name": "Smith-Morra Gambit",
    "description": "White sacrifices a pawn with d4 dxc3 Nxc3 for rapid development and a dangerous initiative against the Sicilian.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Smith-Morra Gambit is one of the most aggressive anti-Sicilian weapons, sacrificing a pawn for rapid development."
      },
      {
        "san": "c5",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "c5 — the Sicilian Defense. Black prepares to fight asymmetrically for d4, but White has a surprise in store."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — White immediately challenges the center. The Smith-Morra begins with this aggressive pawn thrust."
      },
      {
        "san": "cxd4",
        "fen": "rnbqkbnr/pp1ppppp/8/8/3pP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "cxd4 — Black accepts, opening the center. Now White offers a second pawn."
      },
      {
        "san": "c3",
        "fen": "rnbqkbnr/pp1ppppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR b KQkq - 0 3",
        "commentary": "c3 — the Smith-Morra Gambit! White offers a second pawn to gain rapid development. Named after Pierre Morra (France) and Ken Smith (USA) who popularized it extensively. Black can accept with dxc3 or decline with various moves, but accepting leads to sharp, tactical battles."
      },
      {
        "san": "dxc3",
        "fen": "rnbqkbnr/pp1ppppp/8/8/4P3/2p5/PP3PPP/RNBQKBNR w KQkq - 0 4",
        "commentary": "dxc3 — Black accepts the gambit! Now White recaptures with the knight, gaining a massive development lead."
      },
      {
        "san": "Nxc3",
        "fen": "rnbqkbnr/pp1ppppp/8/8/4P3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 4",
        "commentary": "Nxc3 — White recaptures and immediately has a fully developed knight on c3. With Bc4 and Nf3 coming, White will have tremendous piece activity while Black is still trying to develop. The Smith-Morra is a feared weapon at club level and has been used successfully even at grandmaster level."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pp1ppppp/2n5/8/4P3/2N5/PP3PPP/R1BQKBNR w KQkq - 1 5",
        "commentary": "Nc6 — Black develops the knight, fighting for central control. The battle is now a race: Black tries to consolidate with the extra pawn while White generates piece activity. White's compensation includes open files, active piece play, and the initiative. The resulting positions are complex and unbalanced — exactly what the gambit player wants."
      }
    ]
  },
  {
    "id": "sicilian-grand-prix",
    "group": "Semi-Open Games",
    "name": "Grand Prix Attack",
    "description": "White plays Nc3 and f4 against the Sicilian, aiming for a powerful kingside attack without the complexities of the Open Sicilian.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Grand Prix Attack is a popular and dangerous anti-Sicilian system, aiming for a direct kingside attack."
      },
      {
        "san": "c5",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "c5 — the Sicilian Defense. Black aims for counterplay, but White will bypass all Open Sicilian theory."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 2",
        "commentary": "Nc3 — the Grand Prix Attack begins! White develops the knight before playing f4. This specific move order (avoiding Nf3 first) is essential — it prevents Black's ...d5 response from being effective, and prepares the f4 advance that defines the Grand Prix."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 3",
        "commentary": "Nc6 — Black develops naturally, fighting for the center. The game is heading for the characteristic Grand Prix Attack pawn structure."
      },
      {
        "san": "f4",
        "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq - 0 3",
        "commentary": "f4 — the Grand Prix Attack! White aggressively advances the f-pawn, gaining space on the kingside and preparing f5 or e5 advances. This system was heavily used on the British Grand Prix chess circuit in the 1980s, giving it its name. White aims for a direct kingside attack similar to the King's Gambit but with more solidity."
      },
      {
        "san": "g6",
        "fen": "r1bqkbnr/pp1ppp1p/2n3p1/2p5/4PP2/2N5/PPPP2PP/R1BQKBNR w KQkq - 0 4",
        "commentary": "g6 — Black prepares the fianchetto, planning to meet the kingside attack with the powerful g7 bishop. This hypermodern response is the most active — the bishop on g7 will be a powerful defensive and counter-attacking piece."
      },
      {
        "san": "Nf3",
        "fen": "r1bqkbnr/pp1ppp1p/2n3p1/2p5/4PP2/2N2N2/PPPP2PP/R1BQKB1R b KQkq - 1 4",
        "commentary": "Nf3 — White develops the knight and completes the setup. The Grand Prix Attack formation is taking shape: Nc3, f4, Nf3 with Bb5 or Be2 and castling to follow."
      },
      {
        "san": "Bg7",
        "fen": "r1bqk1nr/pp1pppbp/2n3p1/2p5/4PP2/2N2N2/PPPP2PP/R1BQKB1R w KQkq - 2 5",
        "commentary": "Bg7 — the Dragon bishop is in position! Black has a solid hypermodern setup. The game will be a classic battle: White's kingside attack (f4-f5, e5) against Black's counterplay along the long diagonal and queenside play. The Grand Prix Attack leads to rich, attacking chess."
      }
    ]
  },
  {
    "id": "sicilian-classical",
    "group": "Semi-Open Games",
    "name": "Sicilian Classical",
    "description": "Black plays Nc6 in the Open Sicilian after d6, aiming for a classical development with piece activity rather than pawn breaks.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Classical Sicilian is one of the oldest and most respected Sicilian variations."
      },
      {
        "san": "c5",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "c5 — the Sicilian begins. The Classical variation uses d6 and Nc6 for a solid, piece-oriented setup."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — White develops and prepares d4 for the Open Sicilian."
      },
      {
        "san": "d6",
        "fen": "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
        "commentary": "d6 — preparing to develop Nf6 without allowing e5. This flexible move is used in both the Classical Sicilian and the Najdorf depending on the fifth move."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
        "commentary": "d4 — the central pawn break. White opens the center and gains the initiative."
      },
      {
        "san": "cxd4",
        "fen": "rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
        "commentary": "cxd4 — Black exchanges, opening the c-file. The Sicilian pawn structure is established."
      },
      {
        "san": "Nxd4",
        "fen": "rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
        "commentary": "Nxd4 — White centralizes the knight. Now Nc6 (rather than Najdorf's a6) defines the Classical."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pp2pppp/2np4/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
        "commentary": "Nc6 — the Classical Sicilian! Black develops the knight to its most natural square, fighting directly for control of the center. Unlike the Najdorf (a6) or Dragon (g6), the Classical focuses on piece development and central control. World Champions Spassky and Fischer both played the Classical extensively."
      }
    ]
  },
  {
    "id": "french-classical",
    "group": "Semi-Open Games",
    "name": "French Classical",
    "description": "White pins the f6 knight with Bg5, leading to rich positional struggles where both sides fight for central control.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The French Classical (also called the MacCutcheon / Classical Variation) is the sharpest main-line French."
      },
      {
        "san": "e6",
        "fen": "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e6 — the French Defense begins. Black builds the solid pawn structure that defines the French."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — White builds the powerful central pawn duo. The battle for the d5 square begins."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "d5 — Black challenges the center immediately, establishing the characteristic French pawn chain."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 3",
        "commentary": "Nc3 — developing the knight to its best square, supporting e4 and preparing to fight for central control."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 2 4",
        "commentary": "Nf6 — the Classical French! Rather than Bb4 (Winawer) or dxe4 (Rubinstein), Black develops naturally to f6. This knight develops actively and prepares to castle kingside."
      },
      {
        "san": "Bg5",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p2B1/3PP3/2N5/PPP2PPP/R2QKBNR b KQkq - 3 4",
        "commentary": "Bg5 — the Classical French pin! White pins the f6 knight against the queen. This creates immediate pressure and often leads to the most theoretically rich positions in the French Defense. Now Black must decide: the Burn Variation (dxe4), the MacCutcheon (Bb4), or the solid Be7."
      },
      {
        "san": "Be7",
        "fen": "rnbqk2r/ppp1bppp/4pn2/3p2B1/3PP3/2N5/PPP2PPP/R2QKBNR w KQkq - 4 5",
        "commentary": "Be7 — the solid Classical main line! Black unpins naturally and prepares to castle. The position is rich with strategic possibilities. White has the pin and central space; Black has a solid structure and will fight with c5 and queenside counterplay. Some of the most famous French Defense games arise from here."
      }
    ]
  },
  {
    "id": "french-rubinstein",
    "group": "Semi-Open Games",
    "name": "French Rubinstein",
    "description": "Black exchanges on e4 immediately with dxe4, leading to an open and active game rather than the typical locked French positions.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Rubinstein Variation of the French Defense is one of the most active responses available to Black."
      },
      {
        "san": "e6",
        "fen": "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e6 — the French Defense. Black builds the French structure and will immediately open the center."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — White builds the central duo. Black's response will immediately challenge this."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "d5 — Black challenges the center, setting up the Rubinstein exchange."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 3",
        "commentary": "Nc3 — White develops the knight, defending e4. Now Black can play the Rubinstein."
      },
      {
        "san": "dxe4",
        "fen": "rnbqkbnr/ppp2ppp/4p3/8/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
        "commentary": "dxe4 — the Rubinstein Variation! Black immediately exchanges in the center, opening the position. This is the most active French response — rather than maintaining the typical French pawn chain, Black opens the game immediately and develops freely. Named after Akiba Rubinstein, one of the greatest players of the early 20th century."
      },
      {
        "san": "Nxe4",
        "fen": "rnbqkbnr/ppp2ppp/4p3/8/3PN3/8/PPP2PPP/R1BQKBNR b KQkq - 0 4",
        "commentary": "Nxe4 — White recaptures with the knight, placing it on a dominant central square. The e4 knight is powerful and will prove difficult to dislodge. Now Black's response determines the character of the game."
      },
      {
        "san": "Nd7",
        "fen": "r1bqkbnr/pppn1ppp/4p3/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 1 5",
        "commentary": "Nd7 — the most solid response! Black develops the knight from b8 to d7, planning to contest the e4 knight with ...Ngf6 or ...Ndf6. The Rubinstein leads to open, active positions where Black's pieces are free — a refreshing contrast to the closed positions typical of most French Defense variations."
      }
    ]
  },
  {
    "id": "caro-kann-classical",
    "group": "Semi-Open Games",
    "name": "Caro-Kann Classical",
    "description": "After Nxe4, Black develops the bishop to f5 outside the pawn chain — the key strategic idea that makes the Caro-Kann superior to the French.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Classical Caro-Kann is the most traditional and most popular variation of the Caro-Kann Defense."
      },
      {
        "san": "c6",
        "fen": "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "c6 — the Caro-Kann Defense begins. Black prepares d5 and will be able to recapture with the c-pawn, keeping the light-squared bishop active."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — White builds a strong central duo. The Classical Caro-Kann exchange structure is coming."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "d5 — Black immediately challenges the center. The Caro-Kann's key difference from the French becomes apparent in the next few moves."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 3",
        "commentary": "Nc3 — White defends e4, maintaining the central tension. The Classical Variation begins here."
      },
      {
        "san": "dxe4",
        "fen": "rnbqkbnr/pp2pppp/2p5/8/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
        "commentary": "dxe4 — Black exchanges! In the French this would lock in the dark-squared bishop, but in the Caro-Kann the light-squared bishop gets to develop actively."
      },
      {
        "san": "Nxe4",
        "fen": "rnbqkbnr/pp2pppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR b KQkq - 0 4",
        "commentary": "Nxe4 — the knight lands on the dominant e4 square. Now Black's key developing move reveals the Caro-Kann's strategic advantage over the French Defense."
      },
      {
        "san": "Bf5",
        "fen": "rn1qkbnr/pp2pppp/2p5/5b2/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 1 5",
        "commentary": "Bf5 — the Classical Caro-Kann! Black's light-squared bishop develops outside the pawn chain to its most active square. This is IMPOSSIBLE in the French Defense (where the bishop is locked behind e6). This development is the primary reason many players prefer the Caro-Kann to the French. The bishop on f5 is actively placed and will participate in both defense and attack throughout the game."
      }
    ]
  },
  {
    "id": "caro-kann-panov",
    "group": "Semi-Open Games",
    "name": "Caro-Kann Panov Attack",
    "description": "White plays c4 after the exchange, creating an isolated queen's pawn position with rich piece play and attacking chances.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Panov Attack is one of the most ambitious ways for White to fight for an advantage in the Caro-Kann."
      },
      {
        "san": "c6",
        "fen": "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "c6 — the Caro-Kann Defense. Black's solid setup is about to be tested by the Panov Attack."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — White builds the central structure."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "d5 — Black challenges the center immediately in the Caro-Kann style."
      },
      {
        "san": "exd5",
        "fen": "rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
        "commentary": "exd5 — White exchanges, beginning the Panov Attack sequence."
      },
      {
        "san": "cxd5",
        "fen": "rnbqkbnr/pp2pppp/8/3p4/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
        "commentary": "cxd5 — Black recaptures with the c-pawn, maintaining a symmetric pawn structure. The Caro-Kann's key advantage is preserved."
      },
      {
        "san": "c4",
        "fen": "rnbqkbnr/pp2pppp/8/3p4/2PP4/8/PP3PPP/RNBQKBNR b KQkq - 0 4",
        "commentary": "c4 — the Panov Attack! White immediately challenges the d5 pawn, aiming to create an isolated queen's pawn (IQP) position. This transforms the Caro-Kann into a much more dynamic and piece-oriented game. The resulting IQP positions are rich and complex, requiring sophisticated strategic understanding from both sides."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/pp2pppp/5n2/3p4/2PP4/8/PP3PPP/RNBQKBNR w KQkq - 1 5",
        "commentary": "Nf6 — Black develops the knight, fighting for the center. The Panov Attack leads to positions resembling the Queen's Gambit Declined or Semi-Tarrasch. Black must decide whether to allow the IQP (after cxd5 Nxd5) or maintain the tension. The game becomes a battle of the IQP's dynamic possibilities against Black's solid structure."
      }
    ]
  },
  {
    "id": "scandinavian-qd6",
    "group": "Semi-Open Games",
    "name": "Scandinavian: Modern (Qd6)",
    "description": "Black retreats the queen to d6 rather than a5, keeping the queen centralized and setting up an aggressive counter-attacking setup.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Modern Scandinavian with Qd6 is a dynamic alternative to the classical Qa5 retreat."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "d5 — the Scandinavian Defense! Black immediately challenges White's central pawn on move one."
      },
      {
        "san": "exd5",
        "fen": "rnbqkbnr/ppp1pppp/8/3P4/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "exd5 — White accepts the challenge and captures."
      },
      {
        "san": "Qxd5",
        "fen": "rnb1kbnr/ppp1pppp/8/3q4/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "Qxd5 — Black recaptures with the queen, the main line Scandinavian. The queen will now be attacked and must find a good square."
      },
      {
        "san": "Nc3",
        "fen": "rnb1kbnr/ppp1pppp/8/3q4/8/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 3",
        "commentary": "Nc3 — White develops with tempo, attacking the queen. The queen must now choose: Qa5 (classical) or Qd6 (Modern Scandinavian)."
      },
      {
        "san": "Qd6",
        "fen": "rnb1kbnr/ppp1pppp/3q4/8/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 4",
        "commentary": "Qd6 — the Modern Scandinavian! Rather than retreating to a5, Black keeps the queen more centrally placed on d6. This bold choice was popularized in the 1990s and is now a major weapon. The queen on d6 supports a future ...c5 pawn break and keeps the e5 square under observation."
      },
      {
        "san": "d4",
        "fen": "rnb1kbnr/ppp1pppp/3q4/8/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 4",
        "commentary": "d4 — White builds the center. With the queen on d6, White must be careful not to allow Black to activate all pieces quickly."
      },
      {
        "san": "Nf6",
        "fen": "rnb1kb1r/ppp1pppp/3q1n2/8/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 1 5",
        "commentary": "Nf6 — Black develops the knight and attacks e4. The Modern Scandinavian leads to active, piece-oriented play. Black typically follows up with g6, Bg7, and kingside castling, creating a Pirc-like setup. The queen on d6 supports ...c5 breaks and creates interesting tactical possibilities that differ from the classical Qa5 lines."
      }
    ]
  },
  {
    "id": "nimzowitsch-defense",
    "group": "Semi-Open Games",
    "name": "Nimzowitsch Defense",
    "description": "Black develops the queen's knight to c6 on move one, a hypermodern response controlling d4 from afar while avoiding the center pawn structures.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Nimzowitsch Defense is one of the most provocative first moves Black can choose."
      },
      {
        "san": "Nc6",
        "fen": "r1bqkbnr/pppppppp/2n5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 1 2",
        "commentary": "Nc6 — the Nimzowitsch Defense! Black develops the knight immediately, controlling d4 and e5 without occupying the center with pawns. Named after Aaron Nimzowitsch, the father of hypermodern chess. This unusual move can lead to many different positions depending on White's response."
      },
      {
        "san": "d4",
        "fen": "r1bqkbnr/pppppppp/2n5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — White builds the center immediately. This direct approach challenges Black to prove that the knight placement is useful."
      },
      {
        "san": "d5",
        "fen": "r1bqkbnr/ppp1pppp/2n5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "d5 — Black challenges the center! After allowing White to build a pawn center, Black now attacks it. This is the hypermodern philosophy at work: let White occupy the center with pawns, then undermine it with pieces."
      },
      {
        "san": "e5",
        "fen": "r1bqkbnr/ppp1pppp/2n5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
        "commentary": "e5 — White advances aggressively, gaining space. The pawn chain e5-d4 gives White territorial advantage. Black must now decide how to fight back."
      },
      {
        "san": "Bf5",
        "fen": "r2qkbnr/ppp1pppp/2n5/3pPb2/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 1 4",
        "commentary": "Bf5 — Black develops the bishop outside the pawn chain. Similar to the Caro-Kann Classical, Black uses the Bf5 development to keep pieces active. The position is original and less explored than mainstream defenses."
      },
      {
        "san": "Nf3",
        "fen": "r2qkbnr/ppp1pppp/2n5/3pPb2/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq - 2 4",
        "commentary": "Nf3 — White develops and supports the center."
      },
      {
        "san": "e6",
        "fen": "r2qkbnr/ppp2ppp/2n1p3/3pPb2/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 5",
        "commentary": "e6 — Black solidifies the pawn structure and prepares to develop the f8 bishop. The Nimzowitsch Defense leads to original, complex positions where both sides must think for themselves rather than relying on established theory. A favorite weapon for players who want to take White out of preparation."
      }
    ]
  },
  {
    "id": "pirc-austrian",
    "group": "Semi-Open Games",
    "name": "Pirc Austrian Attack",
    "description": "White plays f4 against the Pirc, creating an aggressive attacking formation with f4-f5 potential to storm Black's kingside.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Austrian Attack is White's most aggressive weapon against the Pirc Defense."
      },
      {
        "san": "d6",
        "fen": "rnbqkbnr/ppp1pppp/3p4/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "d6 — the first move of the Pirc Defense, preparing Nf6 without allowing e5."
      },
      {
        "san": "d4",
        "fen": "rnbqkbnr/ppp1pppp/3p4/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "d4 — White builds the powerful pawn center that the Pirc player has allowed."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 1 3",
        "commentary": "Nf6 — Black develops the knight and attacks e4. The Pirc setup continues."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 2 3",
        "commentary": "Nc3 — White develops the knight, reinforcing the center. Now White must choose: the Classical System (Be2) or the Austrian Attack (f4)."
      },
      {
        "san": "g6",
        "fen": "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
        "commentary": "g6 — the Pirc fianchetto! Black prepares Bg7, creating the characteristic hypermodern setup of the Pirc Defense."
      },
      {
        "san": "f4",
        "fen": "rnbqkb1r/ppp1pp1p/3p1np1/8/3PPP2/2N5/PPP3PP/R1BQKBNR b KQkq - 0 4",
        "commentary": "f4 — the Austrian Attack! White immediately pushes the f-pawn, creating a massive attacking formation. The e4-d4-f4 pawn triangle is extremely aggressive, aiming for f5 to storm Black's kingside. This is the most direct attempt to refute the Pirc Defense, and it was considered potentially winning for White for some time."
      },
      {
        "san": "Bg7",
        "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/3PPP2/2N5/PPP3PP/R1BQKBNR w KQkq - 1 5",
        "commentary": "Bg7 — Black's Pirc bishop is in position. The Dragon bishop on g7 is the key defensive piece, and Black must use it to combat White's aggressive f4-f5 plan. The Austrian Attack leads to incredibly sharp, double-edged positions where both sides have dangerous attacking chances. White charges on the kingside while Black seeks queenside counterplay."
      }
    ]
  },
  {
    "id": "alekhine-four-pawns",
    "group": "Semi-Open Games",
    "name": "Alekhine Four Pawns Attack",
    "description": "White builds a massive four-pawn center to refute the Alekhine Defense, while Black aims to undermine this overextension.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Four Pawns Attack is White's most ambitious attempt to punish the Alekhine Defense."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 1 2",
        "commentary": "Nf6 — the Alekhine Defense! Black attacks e4 with the knight on move one, inviting White to chase it with pawn advances."
      },
      {
        "san": "e5",
        "fen": "rnbqkb1r/pppppppp/5n2/4P3/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "e5 — White accepts the challenge and pushes the knight away. The pawn chase begins."
      },
      {
        "san": "Nd5",
        "fen": "rnbqkb1r/pppppppp/8/3nP3/8/8/PPPP1PPP/RNBQKBNR w KQkq - 1 3",
        "commentary": "Nd5 — the knight hops to d5, still in the center. White must decide how aggressively to pursue it."
      },
      {
        "san": "d4",
        "fen": "rnbqkb1r/pppppppp/8/3nP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
        "commentary": "d4 — White builds a second pawn in the center. The massive pawn center is taking shape."
      },
      {
        "san": "d6",
        "fen": "rnbqkb1r/ppp1pppp/3p4/3nP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
        "commentary": "d6 — Black attacks the e5 pawn immediately. The Alekhine player must constantly challenge White's overextended center."
      },
      {
        "san": "c4",
        "fen": "rnbqkb1r/ppp1pppp/3p4/3nP3/2PP4/8/PP3PPP/RNBQKBNR b KQkq - 0 4",
        "commentary": "c4 — the Four Pawns Attack! White builds a third pawn in the center, creating an enormous pawn mass: c4, d4, e5. This is the most ambitious approach, claiming massive space but creating a potentially overextended structure. Black must find the right undermining plan."
      },
      {
        "san": "Nb6",
        "fen": "rnbqkb1r/ppp1pppp/1n1p4/4P3/2PP4/8/PP3PPP/RNBQKBNR w KQkq - 1 5",
        "commentary": "Nb6 — the knight retreats! The Alekhine strategy has worked — Black lured White into building a huge center that now must be defended. After exd6 cxd6, Black has good counterplay against the pawn chain. The Four Pawns Attack is a double-edged weapon: White has tremendous space, but any collapse of the center could be catastrophic."
      }
    ]
  },
  {
    "id": "latvian-gambit",
    "group": "Semi-Open Games",
    "name": "Latvian Gambit",
    "description": "Black sacrifices the e5 pawn with f5 on move two for a wild counter-attack, one of the sharpest and most controversial gambits in chess.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Latvian Gambit is one of the most provocative and unorthodox responses Black can choose."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black establishes a central pawn. The Latvian Gambit will arise immediately on the next move."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — White develops with tempo, attacking e5. The natural developing move, and now Black springs the Latvian Gambit."
      },
      {
        "san": "f5",
        "fen": "rnbqkbnr/pppp2pp/8/4pp2/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
        "commentary": "f5 — the Latvian Gambit! Black immediately counter-attacks with f5, weakening the e5 pawn and creating a wild, unbalanced position. This gambit dates to the 17th century and was popularized by Latvian players in the early 20th century. White can accept with Nxe5 for a tactical battle, or decline with Bc4 or Nc3."
      },
      {
        "san": "Nxe5",
        "fen": "rnbqkbnr/pppp2pp/8/4Np2/4P3/8/PPPP1PPP/RNBQKB1R b KQkq - 0 3",
        "commentary": "Nxe5 — White accepts the gambit! The knight captures the e5 pawn. Black must now play very precisely to generate sufficient counterplay for the sacrificed material."
      },
      {
        "san": "Qf6",
        "fen": "rnb1kbnr/pppp2pp/5q2/4Np2/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 1 4",
        "commentary": "Qf6 — Black attacks the e5 knight immediately! The queen develops aggressively, creating threats against the knight and preparing to continue the counter-attack. This is the main line of the Latvian Gambit — Black fights for the initiative rather than trying to defend."
      },
      {
        "san": "d4",
        "fen": "rnb1kbnr/pppp2pp/5q2/4Np2/3PP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
        "commentary": "d4 — White builds the center and defends the e5 knight indirectly. White is accepting a material plus while trying to consolidate the position."
      },
      {
        "san": "d6",
        "fen": "rnb1kbnr/ppp3pp/3p1q2/4Np2/3PP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5",
        "commentary": "d6 — Black attacks the knight and opens lines. After the knight retreats, Black has the f5 pawn and active piece play as compensation. The Latvian Gambit leads to extremely sharp, unbalanced positions that are notoriously difficult to play correctly over the board. It's a favorite surprise weapon in faster time controls."
      }
    ]
  },
  {
    "id": "elephant-gambit",
    "group": "Semi-Open Games",
    "name": "Elephant Gambit",
    "description": "Black counter-sacrifices with d5 after Nf3, aiming for an aggressive counter-attack but White can gain a large advantage with accurate play.",
    "moves": [
      {
        "san": "e4",
        "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "e4 — the King's Pawn. The Elephant Gambit is one of the most unusual and dangerous counter-gambits Black can play."
      },
      {
        "san": "e5",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "e5 — Black occupies the center. The Elephant Gambit will immediately challenge White's development."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "commentary": "Nf3 — White develops with tempo, attacking e5. Now instead of defending e5 with Nc6, Black springs the Elephant Gambit."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp2ppp/8/3pp3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
        "commentary": "d5 — the Elephant Gambit! Black immediately counter-attacks in the center, offering a pawn. After exd5, Black gets active piece play and open lines. This gambit is considered dubious at the highest level — White can gain a large advantage with accurate play — but it creates immediate complications and can be deadly in quick games."
      },
      {
        "san": "exd5",
        "fen": "rnbqkbnr/ppp2ppp/8/3Pp3/8/5N2/PPPP1PPP/RNBQKB1R b KQkq - 0 3",
        "commentary": "exd5 — White accepts the gambit, capturing the d5 pawn. Now Black continues the counter-attack."
      },
      {
        "san": "e4",
        "fen": "rnbqkbnr/ppp2ppp/8/3P4/4p3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 4",
        "commentary": "e4 — the Elephant counter-attack! Black pushes the e-pawn to attack the f3 knight. This is the whole point — Black gets active counterplay and open lines for the pieces, similar in spirit to other aggressive gambits."
      },
      {
        "san": "Qe2",
        "fen": "rnbqkbnr/ppp2ppp/8/3P4/4p3/5N2/PPPPQPPP/RNB1KB1R b KQkq - 1 4",
        "commentary": "Qe2 — White plays Qe2 to defend the knight and prepare to castle! This is one of the critical responses, keeping the knight protected while maintaining pressure on the e4 pawn."
      },
      {
        "san": "Qe7",
        "fen": "rnb1kbnr/ppp1qppp/8/3P4/4p3/5N2/PPPPQPPP/RNB1KB1R w KQkq - 2 5",
        "commentary": "Qe7 — Black develops the queen to e7, creating a battery on the e-file! The queens face each other on the e-file. Black is playing for maximum complications. The Elephant Gambit leads to original, unexplored positions that can trip up an unprepared opponent, though objective analysis suggests White should maintain an advantage with accurate play."
      }
    ]
  },
  {
    "id": "semi-slav",
    "group": "Closed Games",
    "name": "Semi-Slav Defense",
    "description": "Black combines elements of the Slav (c6) and QGD (e6), creating a solid structure with excellent long-term potential.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — the Queen's Pawn. The Semi-Slav is one of the most theoretically rich and important defenses in modern chess."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "d5 — Black meets the center challenge directly, establishing the Queen's Gambit pawn structure."
      },
      {
        "san": "c4",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "c4 — the Queen's Gambit offer. White will soon face Black's unique Semi-Slav hybrid defense."
      },
      {
        "san": "c6",
        "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "c6 — the Slav move! Black supports d5 and prepares the Semi-Slav hybrid structure."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 3",
        "commentary": "Nf3 — White develops naturally, maintaining pressure on d5."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 2 4",
        "commentary": "Nf6 — Black develops the knight, the most active response in the Slav/Semi-Slav complex."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 3 4",
        "commentary": "Nc3 — White develops and maintains pressure. Both sides are completing development toward the critical Semi-Slav position."
      },
      {
        "san": "e6",
        "fen": "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
        "commentary": "e6 — the Semi-Slav! Black plays both c6 (Slav) AND e6 (QGD). This hybrid creates a very solid structure. The e6 pawn temporarily restricts the c8 bishop but keeps the pawn structure extremely resilient. The Semi-Slav leads to some of the most theoretically important games in modern chess, including the Meran, Moscow, and Anti-Moscow variations."
      }
    ]
  },
  {
    "id": "meran-variation",
    "group": "Closed Games",
    "name": "Semi-Slav: Meran",
    "description": "After the Semi-Slav setup, Black plays Nbd7 and advances b5 for active queenside counterplay in the Meran Variation.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — the Queen's Pawn, heading for the Meran Variation, one of the most analyzed positions in all of chess theory."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "d5 — Black establishes the central pawn structure for the Semi-Slav/Meran complex."
      },
      {
        "san": "c4",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "c4 — the Queen's Gambit structure begins."
      },
      {
        "san": "e6",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "e6 — Black prepares the QGD/Semi-Slav structure first."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 3",
        "commentary": "Nf3 — White develops the knight naturally."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 2 4",
        "commentary": "Nf6 — Black develops actively and prepares to fight for the center."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 3 4",
        "commentary": "Nc3 — White develops both knights in the Meran approach."
      },
      {
        "san": "c6",
        "fen": "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
        "commentary": "c6 — completing the Semi-Slav structure! The position is now ready for the Meran. After 5.e3 Nbd7 6.Bd3 dxc4 7.Bxc4 b5 8.Bd3 (or Bb3) a6, Black gains queenside space with active counterplay. The Meran is named after the 1924 tournament in Merano, Italy, and has been played in countless world championship battles."
      }
    ]
  },
  {
    "id": "moscow-variation",
    "group": "Closed Games",
    "name": "Semi-Slav: Moscow",
    "description": "White pins the f6 knight with Bg5 in the Slav, forcing Black to weaken the queenside or enter complex pin-breaking lines.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — the Queen's Pawn. The Moscow Variation is a specific anti-Slav weapon where White immediately pins the f6 knight."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "d5 — Black establishes the central pawn structure."
      },
      {
        "san": "c4",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "c4 — the Queen's Gambit offer."
      },
      {
        "san": "c6",
        "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "c6 — the Slav Defense! Black supports d5 with the c-pawn, keeping the light-squared bishop's diagonal open."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3",
        "commentary": "Nc3 — White develops the knight, preparing various attacking setups against the Slav."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
        "commentary": "Nf6 — Black develops the knight actively. Now instead of the main Slav line with Nf3, White plays the Moscow with Bg5!"
      },
      {
        "san": "Bg5",
        "fen": "rnbqkb1r/pp2pppp/2p2n2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR b KQkq - 3 4",
        "commentary": "Bg5 — the Moscow Variation! White immediately pins the f6 knight, creating immediate complications. This anti-Slav weapon forces Black to make concrete decisions immediately. The bishop on g5 can create a lasting weakness in Black's position or lead to complex pin-breaking sequences."
      },
      {
        "san": "dxc4",
        "fen": "rnbqkb1r/pp2pppp/2p2n2/6B1/2pP4/2N5/PP2PPPP/R2QKBNR w KQkq - 0 5",
        "commentary": "dxc4 — Black accepts the gambit, giving up the center to open lines! This is one of the key responses to the Moscow — Black takes the pawn and asks White to prove sufficient compensation. After e4 b5, Black holds the extra pawn with an aggressive queenside setup. The Moscow Variation leads to rich, unbalanced positions with both sides having clear plans."
      }
    ]
  },
  {
    "id": "queens-gambit-tartakower",
    "group": "Closed Games",
    "name": "QGD Tartakower",
    "description": "Black plays b6 and Bb7 for active long-diagonal pressure, a favorite of many world champions for its dynamic queenside counterplay.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — the Queen's Pawn. The Tartakower Variation (also called Tartakower-Makogonov-Bondarevsky system) is a very popular QGD setup at the highest level."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "d5 — Black establishes the Queen's Gambit Declined structure."
      },
      {
        "san": "c4",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "c4 — the Queen's Gambit. Black will decline but with an active queenside plan."
      },
      {
        "san": "e6",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "e6 — Black reinforces d5, entering the Queen's Gambit Declined."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3",
        "commentary": "Nc3 — White develops naturally. The Tartakower begins after the Classical setup with Bg5."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
        "commentary": "Nf6 — Black develops the knight to its best square."
      },
      {
        "san": "Bg5",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR b KQkq - 3 4",
        "commentary": "Bg5 — White pins the knight, the Classical QGD setup. Now Black must choose between Be7, h6, or other responses."
      },
      {
        "san": "h6",
        "fen": "rnbqkb1r/ppp2pp1/4pn1p/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq - 0 5",
        "commentary": "h6 — the beginning of the Tartakower! Black immediately challenges the bishop. After Bh4 Be7 e3 O-O Nf3 b6, the Tartakower is complete. The b6+Bb7 fianchetto gives Black active queenside pressure along the a8-h1 diagonal. This was a favorite of Petrosian, Karpov, and Kasparov, and remains one of the most popular QGD setups today."
      }
    ]
  },
  {
    "id": "queens-gambit-lasker",
    "group": "Closed Games",
    "name": "QGD Lasker Defense",
    "description": "Black plays Ne4 to exchange pieces and relieve pressure, a classical equalizing method named after World Champion Emanuel Lasker.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — the Queen's Pawn. The Lasker Defense is Emanuel Lasker's clever method of simplifying the QGD and neutralizing White's typical pressure."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "d5 — Black establishes the Queen's Gambit Declined structure."
      },
      {
        "san": "c4",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "c4 — the Queen's Gambit offer."
      },
      {
        "san": "e6",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "e6 — the Queen's Gambit Declined. Black builds a solid structure."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 3",
        "commentary": "Nf3 — White develops naturally, heading for the QGD main lines."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 2 4",
        "commentary": "Nf6 — Black develops the knight to its best central square."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 3 4",
        "commentary": "Nc3 — White develops both knights, building toward the Classical QGD with Bg5."
      },
      {
        "san": "Be7",
        "fen": "rnbqk2r/ppp1bppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 4 5",
        "commentary": "Be7 — Black develops the bishop and prepares to castle. After Bg5 O-O e3 h6 Bh4, Black will play Ne4! — the Lasker Defense move. By exchanging pieces with Ne4, Black relieves the cramped position and equalizes. World Champion Emanuel Lasker used this method throughout his career, demonstrating that simplification is a profound and sophisticated strategy."
      }
    ]
  },
  {
    "id": "cambridge-springs",
    "group": "Closed Games",
    "name": "Cambridge Springs",
    "description": "Black plays Qa5 with a simultaneous attack on c4 and c3, creating an active queen deployment in the Queen's Gambit.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — the Queen's Pawn. The Cambridge Springs is a classical QGD variation that creates immediate pressure on White's position."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "d5 — Black establishes the Queen's Gambit Declined structure."
      },
      {
        "san": "c4",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "c4 — the Queen's Gambit offer. Black will decline and immediately create problems for White."
      },
      {
        "san": "e6",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "e6 — the QGD. Black reinforces d5 and prepares the Cambridge Springs."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3",
        "commentary": "Nc3 — White develops the knight. The Cambridge Springs requires this knight to be on c3."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
        "commentary": "Nf6 — Black develops the knight to its best square."
      },
      {
        "san": "Bg5",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR b KQkq - 3 4",
        "commentary": "Bg5 — White pins the knight, the Classical QGD setup."
      },
      {
        "san": "Nbd7",
        "fen": "r1bqkb1r/pppn1ppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq - 4 5",
        "commentary": "Nbd7 — preparing the Cambridge Springs! Rather than Be7 (Classical) or h6 (Tartakower), Black develops the knight to d7, preparing the queen sortie to a5. After 5.e3 c6 6.Nf3 Qa5!, the Cambridge Springs Defense is reached — Black's queen attacks c3 and the Bg5 pin simultaneously, creating immediate complications. Named after the 1904 tournament in Cambridge Springs, Pennsylvania."
      }
    ]
  },
  {
    "id": "semi-tarrasch",
    "group": "Closed Games",
    "name": "Semi-Tarrasch Defense",
    "description": "Black plays c5 to create an isolated queen's pawn, accepting structural imperfections for dynamic piece activity.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — the Queen's Pawn. The Semi-Tarrasch is a dynamic QGD variation where Black accepts an isolated pawn for active piece play."
      },
      {
        "san": "d5",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
        "commentary": "d5 — Black establishes the central pawn."
      },
      {
        "san": "c4",
        "fen": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "c4 — the Queen's Gambit. Black will decline and create an IQP position."
      },
      {
        "san": "e6",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "e6 — Black reinforces d5, setting up the QGD/Tarrasch complex."
      },
      {
        "san": "Nc3",
        "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3",
        "commentary": "Nc3 — White develops the knight. The Semi-Tarrasch requires White to play Nf3 before e3."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
        "commentary": "Nf6 — Black develops actively, preparing the c5 counter-thrust."
      },
      {
        "san": "Nf3",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 3 4",
        "commentary": "Nf3 — White develops the second knight. Now Black plays the Semi-Tarrasch."
      },
      {
        "san": "c5",
        "fen": "rnbqkb1r/pp3ppp/4pn2/2pp4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
        "commentary": "c5 — the Semi-Tarrasch! Black immediately counter-attacks White's d4 pawn, creating dynamic pawn tension. After dxc5 Bxc5 or cxd5 exd5 (IQP), the game becomes highly dynamic. The IQP version leads to rich piece play where Black's active pieces compensate for the structural weakness. A favorite of players who want activity and piece play rather than solid structures."
      }
    ]
  },
  {
    "id": "catalan-opening",
    "group": "Indian Defenses",
    "name": "Catalan Opening",
    "description": "White combines the Queen's Gambit with a kingside fianchetto, creating powerful long-diagonal pressure against Black's position.",
    "moves": [
      {
        "san": "d4",
        "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
        "commentary": "d4 — the Queen's Pawn. The Catalan is a sophisticated blend of the QGD and the fianchetto, creating long-term pressure along the long diagonal."
      },
      {
        "san": "Nf6",
        "fen": "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2",
        "commentary": "Nf6 — the Indian Defense. Black signals flexible intentions, waiting to see White's third move."
      },
      {
        "san": "c4",
        "fen": "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
        "commentary": "c4 — White expands, preparing the Catalan setup. The combination of d4, c4, and g3 creates the Catalan's characteristic structure."
      },
      {
        "san": "e6",
        "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        "commentary": "e6 — Black prepares to develop solidly. This move leads to the Open Catalan (if Black takes on c4) or Closed Catalan."
      },
      {
        "san": "g3",
        "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3",
        "commentary": "g3 — the Catalan move! White prepares the fianchetto, creating a powerful system that combines the space advantage of the Queen's Gambit with the long-diagonal pressure of the Reti. The Catalan has been used at the highest level for decades."
      },
      {
        "san": "d5",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq - 0 4",
        "commentary": "d5 — Black establishes a strong center. Now the key question is whether to take on c4 (Open Catalan) or maintain with Bb7 and Be7 (Closed Catalan)."
      },
      {
        "san": "Bg2",
        "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR b KQkq - 1 4",
        "commentary": "Bg2 — the Catalan bishop takes up its powerful position! On g2, the bishop exerts tremendous long-range pressure along the a8-h1 diagonal, especially once Black plays dxc4. This bishop is the soul of the Catalan Opening."
      },
      {
        "san": "Be7",
        "fen": "rnbqk2r/ppp1bppp/4pn2/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR w KQkq - 2 5",
        "commentary": "Be7 — Black develops the bishop and prepares to castle. The Closed Catalan is solid but slightly passive. White has excellent long-term pressure from the Bg2 bishop. The game will be a strategic battle where White gradually increases pressure while Black seeks counterplay."
      }
    ]
  }
]
