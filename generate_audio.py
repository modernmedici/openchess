"""
Pre-generate all chess commentary WAV files using Kokoro ONNX.
Run from the openchess project root:  python3 generate_audio.py
Output: public/audio/{opening-id}-{index}.wav
"""
import os
import soundfile as sf
from kokoro_onnx import Kokoro

AUDIO_DIR = os.path.join(os.path.dirname(__file__), "public", "audio")
os.makedirs(AUDIO_DIR, exist_ok=True)

OPENINGS = [
    {
        "id": "ruy-lopez",
        "moves": [
            "e4 — the King's Pawn Opening. White immediately stakes a claim in the center, opens lines for the bishop and queen, and prepares to castle kingside. This is one of the most aggressive and direct first moves in chess.",
            "e5 — Black mirrors White's pawn in the center, establishing symmetry and fighting for equal space. This is the classical response, leading to open games where both sides battle for control of the center squares.",
            "Nf3 — White develops the knight to its best square, attacking the e5 pawn and controlling d4 and g5. This natural developing move applies immediate pressure and follows the principle: develop with threats.",
            "Nc6 — Black defends the e5 pawn while developing a piece. The knight on c6 is well-placed, controlling the center squares d4 and e5. This is the most natural and common response.",
            "Bb5 — the defining move of the Ruy Lopez! The bishop pins the knight against the king, indirectly attacking the e5 pawn. If the knight moves, e5 falls. This subtle positional pressure is the hallmark of the Spanish Game.",
            "a6 — the Morphy Defense, the most popular response. Black challenges the bishop immediately, forcing it to declare its intentions. This gains space on the queenside and asks: will White retreat, exchange, or sacrifice?",
            "Ba4 — White retreats the bishop to maintain the pin. The bishop on a4 still eyes the c6 knight and supports the d4 pawn break. White keeps the tension rather than exchanging the powerful bishop.",
            "Nf6 — Black counter-attacks the e4 pawn! This aggressive move develops the knight to its ideal square while creating immediate threats. The position is now rich with tactical and strategic possibilities for both sides.",
        ],
    },
    {
        "id": "italian-game",
        "moves": [
            "e4 — White opens with the King's Pawn, the most dynamic first move. This controls the d5 and f5 squares, opens diagonals for the bishop and queen, and begins the fight for the center.",
            "e5 — Black establishes a symmetric pawn center. This classical response leads to open positions where both sides will fight for the initiative. The e5 pawn is now a target but also a strong central asset.",
            "Nf3 — developing with tempo, attacking e5. The knight is perfectly placed, controlling the key central squares d4 and g5. White follows the golden rule: develop pieces toward the center with each move.",
            "Nc6 — defending e5 while developing. The knight controls d4 and adds pressure to e5. Black is following the same sound developing principles as White, setting up a balanced but tense middlegame.",
            "Bc4 — the Italian move! The bishop targets the f7 square, Black's weakest point early in the game. This bishop is incredibly active, eyeing the kingside and supporting a future d4 pawn break. The Giuoco Piano begins!",
            "Bc5 — Black mirrors the strategy! The bishop is equally active on c5, targeting f2 and controlling the center. Both sides have developed actively; the position is razor-sharp with balanced play ahead.",
            "c3 — preparing d4! White plans a strong pawn center with d4, which would challenge Black's bishop and gain central space. This is the Giuoco Piano approach — solid and strategic, building for a powerful center break.",
            "Nf6 — Black develops actively and attacks e4! Instead of allowing White to build a big center unopposed, Black counter-attacks immediately. The position is now complex with both sides having active pieces and tactical possibilities.",
        ],
    },
    {
        "id": "sicilian-defense",
        "moves": [
            "e4 — White claims the center immediately. This is the most aggressive and principled first move, leading to sharp, open positions where both sides fight for the initiative from the very start.",
            "c5 — the Sicilian Defense! Rather than matching White's central pawn, Black fights for d4 from the flank. This creates an asymmetric position where Black accepts a queenside majority in exchange for active counterplay. It's the most-played response to 1.e4.",
            "Nf3 — White develops the knight and prepares d4. This is the most popular continuation, leading to the Open Sicilian. White will follow up with d4, exchanging pawns and gaining a lead in development while Black gets a strong pawn structure.",
            "d6 — preparing to develop the knight to f6 without allowing e5 to kick it. Black solidifies the center and prepares to challenge White's e4 pawn later. This leads to the Najdorf or Classical Sicilian depending on Black's next moves.",
            "d4 — the critical pawn break! White opens the center, gaining space and a strong initiative. After the pawn exchange, White will have a d4 pawn versus Black's c5 pawn — a structural imbalance that defines the Sicilian middlegame.",
            "cxd4 — Black captures, opening the c-file for the rook and creating the characteristic Sicilian pawn structure. Black will operate on the queenside while White attacks on the kingside — a race that leads to incredibly complex middlegame battles.",
            "Nxd4 — White recaptures with the knight, centralizing it powerfully. The knight on d4 is a dominant piece, controlling the center. Now Black must decide how to develop — the choices here lead to the many famous Sicilian variations.",
            "Nf6 — the Classical Sicilian! Black develops the knight to its best square, attacking the e4 pawn and controlling the center. The position is now rich with possibilities for both sides, characteristic of the Sicilian's dynamic and unbalanced nature.",
        ],
    },
    {
        "id": "queens-gambit",
        "moves": [
            "d4 — the Queen's Pawn Opening! White claims the center differently from 1.e4. The d4 pawn is well-protected by the queen, making it very hard to challenge immediately. This leads to more strategic, closed positions.",
            "d5 — Black meets in the center. This is one of the most common responses, challenging White's central pawn directly. Black aims for a solid, symmetric structure while looking for counterplay opportunities in the middlegame.",
            "c4 — the Queen's Gambit! White offers a pawn to deflect Black's central pawn. If Black captures, White will recapture with a piece and gain central control. This is one of the oldest and most respected openings — used by world champions for centuries.",
            "e6 — the Queen's Gambit Declined! Black refuses the gambit pawn and reinforces d5. While this slightly closes in the dark-squared bishop, it creates a very solid position. Black says: I don't need your pawn — I'll hold the center and develop solidly.",
            "Nc3 — developing the knight to its natural square, supporting the d4 pawn and preparing e4. White is building a classical pawn center. The knight on c3 will become very active in the coming middlegame battles.",
            "Nf6 — Black develops the knight to its best square, controlling d5 and e4. This is the most active developing move, keeping pressure on White's center while preparing to castle. The position is now a classic Queen's Gambit Declined setup.",
            "Bg5 — a powerful developing move that pins the f6 knight! If Black captures on c4, White will play e4 gaining a strong center. The pin on the knight creates lasting pressure and is a key strategic idea in the Queen's Gambit.",
            "Be7 — the solid Classical Variation! Black breaks the pin quietly, preparing to castle kingside. This is a patient, strategic approach. Black's position is solid if somewhat cramped, and the game will be a long strategic battle for control.",
        ],
    },
    {
        "id": "kings-indian-defense",
        "moves": [
            "d4 — White opens with the Queen's Pawn, aiming for central control and a strategic game. This move supports e4 and creates a pawn chain that can dominate the center if Black doesn't react correctly.",
            "Nf6 — the Indian Defense! Black develops the knight to f6, controlling e4 and signaling hypermodern intentions. Rather than occupying the center immediately, Black will let White build it and then attack it later. A flexible, dynamic approach.",
            "c4 — White builds the English-QP setup, claiming space and preparing e4. This creates a massive pawn center that will be Black's target. White is following the classical approach: establish pawns in the center, then develop pieces behind them.",
            "g6 — the King's Indian Defense! Black prepares to fianchetto the bishop. This hypermodern idea allows White to build a big center while Black prepares a powerful counterattack. The coming bishop on g7 will be a fearsome weapon.",
            "Nc3 — White develops the knight and continues building the center. The knight on c3 supports d4 and prepares e4. White is following the classical plan of occupying the center with pawns and developing pieces behind them.",
            "Bg7 — the King's Indian bishop! On g7, this bishop is a dragon pointing at the queenside. It will become enormously powerful once Black breaks with e5 or c5. This bishop is the soul of the King's Indian Defense.",
            "e4 — White establishes the big center! The e4 pawn creates a space advantage and the threat of e5 to push Black's knight around. This is exactly what Black wanted — now the counterattack with e5 will challenge this center directly.",
            "d6 — preparing e5! Black solidifies the position and prepares the key thematic break. The d6 pawn keeps e5 under Black's control and prepares to challenge White's massive center. The battle lines are drawn for a complex middlegame.",
        ],
    },
    {
        "id": "london-system",
        "moves": [
            "d4 — White begins the London System. This flexible first move controls the center and supports c4 or e4 in the future. The London is known for being solid and reliable, providing a comfortable position without needing extensive memorization.",
            "d5 — Black meets in the center. This is one of the most common responses, challenging White's central pawn directly. Black aims for a solid, symmetric structure while looking for counterplay opportunities in the middlegame.",
            "Bf4 — the key move of the London System! The bishop develops outside the pawn chain before playing e3. On f4, the bishop controls the dark squares, supports e3, and aims at the c7 pawn. This is the defining characteristic of the London setup.",
            "Nf6 — the most natural response, developing the knight to control the center. Black is unperturbed by the London setup and continues developing normally. The knight on f6 attacks the e4 square and prepares to castle kingside.",
            "e3 — solidifying the bishop and preparing to develop the f1 bishop. The London System involves this solid triangle: d4, e3, Bf4. White's position is very solid and difficult to attack, but the bishop on c1 remains temporarily blocked.",
            "e6 — Black reinforces d5 and prepares to develop the f8 bishop. This creates a solid structure. Black is matching White's solidity with their own reliable setup, preparing for a strategic middlegame battle.",
            "Nf3 — developing the knight to its natural square. The London System triangle is almost complete: d4, Bf4, e3, Nf3. This setup is incredibly solid and flexible. White can expand with c4 or c3 depending on what Black does.",
            "Bd6 — Black challenges the f4 bishop directly! By placing the bishop on d6, Black attacks the f4 bishop and offers an exchange. This is an active approach. White must decide whether to exchange bishops or retreat, each with different strategic implications.",
        ],
    },
]


def main():
    print("Loading Kokoro model...")
    kokoro = Kokoro("/tmp/kokoro-v1.0.onnx", "/tmp/voices-v1.0.bin")
    print("Model loaded.\n")

    total = sum(len(o["moves"]) for o in OPENINGS)
    done = 0

    for opening in OPENINGS:
        oid = opening["id"]
        for i, commentary in enumerate(opening["moves"]):
            out_path = os.path.join(AUDIO_DIR, f"{oid}-{i}.wav")
            if os.path.exists(out_path):
                print(f"  skip  {oid}-{i}.wav (already exists)")
                done += 1
                continue
            print(f"  [{done+1}/{total}] generating {oid}-{i}.wav ...")
            samples, sample_rate = kokoro.create(
                commentary, voice="af_heart", speed=1.0, lang="en-us"
            )
            sf.write(out_path, samples, sample_rate)
            done += 1

    print(f"\nDone! {done} files written to public/audio/")


if __name__ == "__main__":
    main()
