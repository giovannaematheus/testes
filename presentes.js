document.addEventListener('DOMContentLoaded', () => {
    const produtos = {
        potes: {
            nome: "Potes Herméticos",
            imagem: "potes.jpg",
            qrCode: "potesQR.jpg",
            descricao: "Conjunto electrolux 10 potes para alimentos de tamanhos variados",
            valor: 99,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c15520400005303986540599.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFFHZF6PWB8JNC1EN5B0TBYB63047261",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/emu5798-potes-hermeticos"
        },
        sanduicheira: {
            nome: "Sanduícheira Inox",
            imagem: "sanduicheira.jpg",
            qrCode: "sanduicheiraQR.jpg",
            descricao: "Sanduícheira Master Grill, ideal para lanches e grelhados, 110v",
            valor: 110,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406110.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFE2H293DYSJ9VZS6T1TTJP963041CA0",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/cpt7371-sanduicheira-mondial"
        },
        jarra: {
            nome: "Jarra de Suco Lyor",
            imagem: "jarra.jpg",
            qrCode: "jarraQR.jpg",
            descricao: "Jarra de Suco e Água Imperial Fio de Ouro 1 Litro, Lyor",
            valor: 130,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406130.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JNCMBCB2TYWNA5EBXB93C3NC6304247C",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/hwa9377-jarra-de-suco-lyor"
        },
        cadeira: {
            nome: "Cadeira de Escritório",
            imagem: "cadeira.jpg",
            qrCode: "cadeiraQR.jpg",
            descricao: "Cadeira de escritório giratória, base cromada essencial cor preta",
            valor: 150,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406150.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFG8FHXKT1KRVMXZ8E2KYPKZ630442FB",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/var1045-cadeira-escritorio"
        },
        tomadas: {
            nome: "Torre de Tomadas",
            imagem: "tomadas.jpg",
            qrCode: "tomadasQR.jpg",
            descricao: "Torre de Tomadas, acabamento cromado, espaço para 3 tomadas",
            valor: 160,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406160.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JNCHF3GJCGK0RPWB4ZE7QGPG6304743C",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/rtn9853-torre-de-tomadas"
        },
        ferro: {
            nome: "Ferro de Passar",
            imagem: "ferro.jpg",
            qrCode: "ferroQR.jpg",
            descricao: "Ferro de Passar Roupa a Vapor e a Seco Black Decker 110v",
            valor: 180,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406180.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JNBS7WTMGQHMRKN1MFS5V50W63048C8E",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/jrq8324-ferro-de-passar"
        },
        ventilador: {
            nome: "Ventilador Mondial",
            imagem: "ventilador.jpg",
            qrCode: "ventiladorQR.jpg",
            descricao: "Ventilador de mesa Mondial turbo, 3 velocidades, 8 pás, 110v",
            valor: 190,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406190.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFG0ZA6EWNBVHPZXCBH3NYFP6304255D",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/mff3344-ventilador-mondial"
        },
        chapa: {
            nome: "Chapa Grill Indução",
            imagem: "chapa.jpg",
            qrCode: "chapaQR.jpg",
            descricao: "Chapa Grill para Fogão e Indução Antiaderente Cerâmica Preto",
            valor: 195,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406195.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JNCJYRR7WZZ8PRHBSEADSYE06304B326",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/ofr1488-chapa-grill-inducao"
        },
        arroz: {
            nome: "Panela de Arroz",
            imagem: "arroz.jpg",
            qrCode: "arrozQR.jpg",
            descricao: "Panela elétrica de arroz mondial seis xícaras preta/inox",
            valor: 200,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406200.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFH0GFF6D3ZSXVE7Y0NC96GK6304EFAC",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/lqa8441-panela-de-arroz"
        },
        mixer: {
            nome: "Mixer Electrolux",
            imagem: "mixer.jpg",
            qrCode: "mixerQR.jpg",
            descricao: "Mixer Electrolux 3 em 1 com copo e batedor de claras, 400w 110v",
            valor: 205,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406205.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JHE16YEQPMWNBM39C8610HXA63045529",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/jil8706-mixer-electrolux"
        },
        pratos: {
            nome: "Jogo de Jantar",
            imagem: "pratos.jpg",
            qrCode: "pratosQR.jpg",
            descricao: "Aparelhos de Jantar e sobremesa Duralex modelo Pétala (24 peças)",
            valor: 220,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406220.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFMN2CH8C1Z4Z06WDQ59CB816304A235",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/hgc9486-jogo-de-jantar"
        },
        churrasqueira: {
            nome: "Churrasqueira Elétrica",
            imagem: "churrasqueira.jpg",
            qrCode: "churrasqueiraQR.jpg",
            descricao: "Churrasqueira Elétrica e grill portátil Cadence modelo GRL810 110v",
            valor: 230,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406230.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JHE1MTJX6TXZ7YE3BXN0Z6RR6304A3AF",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/xap2485-churrasqueira-eletrica"
        },
        liquidificador: {
            nome: "Liquidificador Oster",
            imagem: "liquidificador.jpg",
            qrCode: "liquidificadorQR.jpg",
            descricao: "Liquidificador 3,2L com 15 velocidades, 110v 1400w",
            valor: 250,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406250.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFE7QKZ954SF7WFASWNEZ2V2630430C4",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/vgx3367-liquidificador-oster"
        },
        fondue: {
            nome: "Panela de Fondue",
            imagem: "fondue.jpg",
            qrCode: "fondueQR.jpg",
            descricao: "Panela elétrica Oster para fondue com regulador e espetos, 110v",
            valor: 260,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406260.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JHE28J0YPFDS7J6RRHBM89BC630420B8",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/feh1024-panela-de-fondue"
        },
        toalhas: {
            nome: "Jogo de Toalhas",
            imagem: "toalhas.png",
            qrCode: "toalhasQR.jpg",
            descricao: "Jogo De Toalhas Montreal 10 Peças, Branco e cinza",
            valor: 275,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406275.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFMNQ02RHCHDK9A3095SZ0E963045484",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/qvl4161-jogo-de-toalhas"
        },
        comoda: {
            nome: "Cômoda em Madeira",
            imagem: "comoda.jpg",
            qrCode: "comodaQR.jpg",
            descricao: "Cômoda em madeira marrom com 5 gavetas e 1 porta com divisória",
            valor: 300,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406300.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFMPX488HJ3VPH2J0EJY7K2F63044937",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/oil5583-comoda-em-madeira"
        },
        airfrayer: {
            nome: "AirFryer Mondial",
            imagem: "airfrayer.jpg",
            qrCode: "airfrayerQR.jpg",
            descricao: "Fritadeira elétrica sem óleo, family inox 4 litros, cor preta, 110v",
            valor: 319,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406319.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFAGQ6Y5EQ59J3Q2JETVYFQN6304D3B0",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/ejo8571-fritadeira-eletrica-mondial"
        },
        frigideira: {
            nome: "Frigideira Inox",
            imagem: "frigideira.jpg",
            qrCode: "frigideiraQR.jpg",
            descricao: "Frigideira Tramontina Grano aço inox 1,2 Litros antiaderente 20cm",
            valor: 340,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406340.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFH2QPAPE2T0E0J5X14ZER4X63042644",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/eny8591-frigideira-antiaderente"
        },
        processador: {
            nome: "Processador Electrolux",
            imagem: "processador.jpg",
            qrCode: "processadorQR.jpg",
            descricao: "Processador de alimentos Electrolux 3 em 1 modelo Efficient (EFP500)",
            valor: 360,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406360.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JHE2PE499TZ4802078H66Y7B63047259",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/fvl7480-processador-electrolux"
        },
        pressao: {
            nome: "Panela de Pressão",
            imagem: "pressao.jpg",
            qrCode: "pressaoQR.jpg",
            descricao: "Panela de pressão elétrica mondial pratic cook 3L premium",
            valor: 380,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406380.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFH16R5BYG16ACJ0CYEBQ04N63046B25",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/dku9424-panela-de-pressao"
        },
        faqueiro: {
            nome: "Faqueiro Tramontina",
            imagem: "faqueiro.jpg",
            qrCode: "faqueiroQR.jpg",
            descricao: "Kit de talheres pacific, contém 36 peças, serve até 6 pessoas",
            valor: 409,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406409.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFBZ8K85DM0C2XT7QD2QQBAK6304D945",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/ayr5766-faqueiro-tramontina"
        },
        espremedor: {
            nome: "Espremedor Inox",
            imagem: "espremedor.jpg",
            qrCode: "espremedorQR.jpg",
            descricao: "Espremedor de frutas profissional inox industrial 500w",
            valor: 430,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406430.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFMS57WP1WPXQH20E0C7ZHV863048689",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/fgp2545-espremedor-inox"
        },
        lustre: {
            nome: "Lustre Arcos Led",
            imagem: "lustre.jpg",
            qrCode: "lustreQR.jpg",
            descricao: "Lustre led moderno em arcos suspenso prata",
            valor: 450,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406450.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFG6294K2ZZWDBKNAZXNCWVS63046D68",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/ifl6001-lustre-de-led"
        },
        mala: {
            nome: "Mala de Viagem",
            imagem: "mala.jpg",
            qrCode: "malaQR.jpg",
            descricao: "Mala de viagem Sestini grande quatro rodas giro 360 graus produzida em ABS",
            valor: 497,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406497.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFH1Z4K5KE1CAVS9018HVF4Z63045EC9",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/sqm3422-mala-de-viagem"
        },
        batedeira: {
            nome: "Batedeira Philco",
            imagem: "batedeira.jpg",
            qrCode: "batedeiraQR.jpg",
            descricao: "Batedeira Elétrica Planetária Philco turbo inox double bowl 600w 110v",
            valor: 501,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406501.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JHDYNZ37MEW7PZYS07BRFW5M6304A577",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/igp2561-batedeira-philco"
        },
        panelasgrafite: {
            nome: "Jogo de Panelas",
            imagem: "panelasgrafite.jpg",
            qrCode: "panelasgrafiteQR.jpg",
            descricao: "Kit de panelas tramontina Paris modelo grafite 8 peças e utensílios",
            valor: 509,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406509.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFG6N6JT78YM0KSW045Z5ZCM6304794E",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/xgv6331-panelas-grafite"
        },
        microondas: {
            nome: "Forno Micro-ondas",
            imagem: "microondas.jpg",
            qrCode: "microondasQR.jpg",
            descricao: "Forno Micro-ondas Panasonic 21Litros branco espelhado para embutir",
            valor: 520,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406520.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFGY7G7ANEP7S7S3A36TV7N263048F55",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/pib3149-micro-ondas-panasonic"
        },
        panelasinox: {
            nome: "Panelas Inox 5 Peças",
            imagem: "panelasinox.jpg",
            qrCode: "panelasinoxQR.jpg",
            descricao: "Jogo De Panelas Aço Inox Indução Tramontina Allegra",
            valor: 530,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406530.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JNBT3MNA7SH9MB402GG216GM63044BCB",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/wwn3871-panelas-inox-5pcs"
        },
        cafeteira: {
            nome: "Cafeteira Nescafé",
            imagem: "cafeteira.jpg",
            qrCode: "cafeteiraQR.jpg",
            descricao: "Cafeteira Nescafé Dolce Gusto Arno cor preta, 110v",
            valor: 550,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406550.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFG9BEA4CV9PB18AFCVT3CFA6304DE27",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/veq8346-cafeteira-nescafe"
        },
        escrivaninha: {
            nome: "Mesa de Escritório",
            imagem: "mesa.jpg",
            qrCode: "mesaQR.jpg",
            descricao: "Escrivaninha / Mesa de escritório, modelo de canto com 2 gavetas carvalho",
            valor: 580,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406580.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JHDV3S1AR9JTG173JZGG9F4X6304A99A",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/vgs7295-mesa-de-escritorio"
        },
        alexa: {
            nome: "Echo Show (Alexa)",
            imagem: "alexa.jpg",
            qrCode: "alexaQR.jpg",
            descricao: "Alexa Echo Show 5 Display 5,5” Geração 3, câmera 2MP",
            valor: 600,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406600.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFG7CA5APJEKKHSJPHR47GDD6304AFDD",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/gbj7826-echo-show-5"
        },
        aparador: {
            nome: "Armario Aparador",
            imagem: "aparador.jpg",
            qrCode: "aparadorQR.jpg",
            descricao: "Aparador Armário Buffet 4 Portas C/ Base Em Madeira Off White",
            valor: 610,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406610.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JNBR9ZDTQ73Q2SM06VB86VRW63042483",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/fgd9962-armario-aparador"
        },
        chuveiro: {
            nome: "Chuveiro Acqua Duo",
            imagem: "chuveiro.jpg",
            qrCode: "chuveiroQR.jpg",
            descricao: "Chuveiro Acqua Duo Ultra preto e cromado Lorenzetti 220v",
            valor: 630,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406630.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JHDZXBQMFP5GN88EZH703A0J630411EA",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/tda9454-chuveiro-acqua-duo"
        },
        penteadeira: {
            nome: "Penteadeira Camarim",
            imagem: "penteadeira.jpg",
            qrCode: "penteadeiraQR.jpg",
            descricao: "Penteadeira MDF camarim com espelho, 02 portas e 03 gavetas",
            valor: 650,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406650.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JNBPWJACXSWEV941NR7VSV9F63045012",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/eoe7614-penteadeira-camarim"
        },
        robo: {
            nome: "Robô Aspirador",
            imagem: "robo.jpg",
            qrCode: "roboQR.jpg",
            descricao: "Robô aspirador Philco Pas22p recarregável mob filtro, preto, bivolt",
            valor: 660,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406660.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFGWCTC7WV0K1TS45DESXHSC6304B68F",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/xmb8528-robo-aspirador"
        },
        fechadura: {
            nome: "Fechadura Eletrônica",
            imagem: "fechadura.jpg",
            qrCode: "fechaduraQR.jpg",
            descricao: "Fechadura digital biométrica eletrônica para porta de madeira Primebras",
            valor: 690,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406690.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JHE0K3NHH8VBCJWE4SYCHR976304A14D",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/bhx8880-fechadura-eletronica"
        },
        guardaroupa: {
            nome: "Guarda-Roupas",
            imagem: "guardaroupa.jpg",
            qrCode: "guardaroupaQR.jpg",
            descricao: "Guarda-Roupas Bartira, modelo Ilhéus, 6 portas e 3 gavetas",
            valor: 710,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406710.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFG01WJQ0H0VG6VD2QVN5PV763045FC4",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/vnj2559-guarda-roupa-ilheus"
        },
        torneira: {
            nome: "Torneira Cozinha",
            imagem: "torneira.jpg",
            qrCode: "torneiraQR.jpg",
            descricao: "Torneira Gourmet cozinha baixa monocomando Luxo Cromado",
            valor: 730,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406730.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JHDZA61H6Y6SD03F0S5H24P863042E29",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/kif9952-torneira-cozinha"
        },
        filtro: {
            nome: "Filtro Electrolux",
            imagem: "filtro.jpg",
            qrCode: "filtroQR.jpg",
            descricao: "Purificador e refrigerador de água Electrolux modelo PE12A",
            valor: 750,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406750.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JHDRJQQKVS91DQT8FTVYEPQ063045BE6",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/rqt7164-filtro-electrolux"
        },
        adega: {
            nome: "Adega de Vinhos",
            imagem: "adega.jpg",
            qrCode: "adegaQR.jpg",
            descricao: "Adega de Vinhos Climatizada Electrolux com painel touch",
            valor: 800,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406800.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JHDT4P20KPS7EAA9FDVSHC366304EC21",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/wsr9811-adega-de-vinhos"
        },
        rack: {
            nome: "Rack com Painel",
            imagem: "rack.jpg",
            qrCode: "rackQR.jpg",
            descricao: "Rack em MDP com painel de TV, pintura UV, com prateleiras",
            valor: 840,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406840.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFFPY7X860FMRF389FZ8X0Q56304FB13",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/mdl5279-rack-com-painel"
        },
        impressora: {
            nome: "Impressora EcoTank",
            imagem: "impressora.jpg",
            qrCode: "impressoraQR.jpg",
            descricao: "Impressora Epson EcoTank, Colorida, Conexão USB e Wi-FI",
            valor: 900,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406900.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JNCG3BBB7SWKB7PDWYHSQA796304BFEC",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/jcu5502-impressora-ecotank"
        },
        aspirador: {
            nome: "Aspirador de Pó",
            imagem: "aspirador.jpg",
            qrCode: "aspiradorQR.jpg",
            descricao: "Aspirador de pó vertical Electrolux, Ergorápido 420ml",
            valor: 950,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406950.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JHDK0977C9V2Y6QZVZ2GV2H363042931",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/eev2661-aspirador-de-po"
        },
        tapete: {
            nome: "Tapete 2,50m x 3,00m",
            imagem: "tapete.jpg",
            qrCode: "tapeteQR.jpg",
            descricao: "Tapete Santorini São Carlos 250x300cm feito em microfibra",
            valor: 990,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c155204000053039865406990.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFGX9KEX8CJ7ZD1TBGW0TF1963042C59",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/dop3117-tapete-250x300cm"
        },
        coifa: {
            nome: "Coifa Electrolux",
            imagem: "coifa.jpg",
            qrCode: "coifaQR.jpg",
            descricao: "Coifa de parede Electrolux com luzes de led embutida e vidros laterais",
            valor: 1050,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654071050.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFGVE5KYNGXHY6QEMX194D5R6304653A",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/bfa1155-coifa-electrolux"
        },
        jbl: {
            nome: "Soundbar JBL",
            imagem: "jbl.jpg",
            qrCode: "jblQR.jpg",
            descricao: "Soundbar JBL Cinema SB180 com 2.1 Canais, Bluetooth, HDMI e Sem Fio - 110W",
            valor: 1100,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654071100.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JNCD596W65PC8TVCBW95C1JH63043ECD",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/bol6456-soundbar-jbl"
        },
        cristaleira: {
            nome: "Cristaleira Aura",
            imagem: "cristaleira.jpg",
            qrCode: "cristaleiraQR.jpg",
            descricao: "Cristaleira Aura com duas portas de vidro, feita em madeira natural marrom",
            valor: 1130,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654071130.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFK8ZTM9SMSZ8TE4E6DVS7FR630452BB",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/gac1775-cristaleira-aura"
        },
        espelho: {
            nome: "Espelho Iluminado",
            imagem: "espelho.jpg",
            qrCode: "espelhoQR.jpg",
            descricao: "Espelho com Iluminação LED 1,80m Paris Branco",
            valor: 1200,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654071200.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JNCDSFB34P69AXKFVCXZ0XHP6304DB12",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/bjy2874-espelho-iluminado"
        },
        tv32: {
            nome: "Smart TV Samsung 32'",
            imagem: "tv32.jpg",
            qrCode: "tv32QR.jpg",
            descricao: "Smart TV led 32 Polegadas Samsung HDR wifi HDMI e USB, ideal para o quarto",
            valor: 1240,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654071240.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFH465SNBBTR3M5G6BSWZQBS63047845",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/wbr7356-smart-tv-sansung"
        },
        closet: {
            nome: "Closet Casal",
            imagem: "closet.jpg",
            qrCode: "closetQR.jpg",
            descricao: "Closet Casal Premium com 08 gavetas, madeira cor branca",
            valor: 1300,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654071300.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JHDKV4HHXYQVEF9WHQ7KK13M63042C52",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/ljx5808-closet-casal"
        },
        cuba: {
            nome: "Cuba de apoio Deca",
            imagem: "cuba.jpg",
            qrCode: "cubaQR.jpg",
            descricao: "Cuba De Apoio Deca Slim Retangular 60Cm Branca",
            valor: 1400,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654071400.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JNCEZRS83RKJEAYNJ0NM76EP63040810",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/xsg1079-cuba-de-apoio-deca"
        },
        cooktop: {
            nome: "Cooktop de Indução",
            imagem: "cooktop.jpg",
            qrCode: "cooktopQR.jpg",
            descricao: "Cooktop elétrico indução quatro bocas Britânia, em vidro preto, 220v",
            valor: 1490,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654071490.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFFMZ6ZRV1VJGAZTHHJF9KGN63045B70",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/tdc3259-cooktop-de-inducao"
        },
        cama: {
            nome: "Cama Queen",
            imagem: "cama.jpg",
            qrCode: "camaQR.jpg",
            descricao: "Cama Queen baú, tecido sintético branco com colchão incluso",
            valor: 1550,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654071550.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JHDN1AFREH99YK3YQ69QJ3AG6304E325",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/dnu2071-cama-queen"
        },
        triturador: {
            nome: "Triturador de Alimentos",
            imagem: "triturador.jpg",
            qrCode: "trituradorQR.jpg",
            descricao: "Triturador De Alimentos Modelo 56 Insinkerator 127V",
            valor: 1600,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654071600.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JNBYJRSBX0FP3Q5HAY3ENZHY63047D9E",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/kfm2032-triturador-de-alimentos"
        },
        forno: {
            nome: "Forno Elétrico",
            imagem: "forno.jpg",
            qrCode: "fornoQR.jpg",
            descricao: "Forno de embutir elétrico Electrolux 50L, 220v",
            valor: 1740,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654071740.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFFP0JY6AKPTAQM0H4YZTMGC63045C38",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/tcs8186-forno-eletrico"
        },
        pia: {
            nome: "Cuba Gourmet",
            imagem: "pia.jpg",
            qrCode: "piaQR.jpg",
            descricao: "Cuba de pia gourmet aço inox multifuncional com calha é acessórios",
            valor: 1950,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654071950.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JHH479M7X8VVA5VV6BBM13GK6304EBBC",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/odn3953-cuba-gourmet"
        },
        tv50: {
            nome: "Smart TV 4K 50'",
            imagem: "tv50.jpg",
            qrCode: "tv50QR.jpg",
            descricao: "Smart TV led 4K 50 Polegadas Samsung UHD Crystal",
            valor: 2090,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654072090.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFH4V744GMA0D6V4E7GZY4N2630491BD",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/pqj7093-smart-tv-sansung-50-4k"
        },
        sofa: {
            nome: "Sofá Retrátil",
            imagem: "sofa.jpg",
            qrCode: "sofaQR.jpg",
            descricao: "Sofá retrátil reclinável modelo frança com molas",
            valor: 2200,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654072200.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFKD0JCBJW46D2JEEH90VB4Q6304C371",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/eyt2206-sofa-retratil"
        },
        jantar: {
            nome: "Conjunto de Jantar",
            imagem: "jantar.jpg",
            qrCode: "jantarQR.jpg",
            descricao: "Conjunto de Jantar 135cm redonda com seis cadeiras",
            valor: 2300,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654072300.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFKAZ80J9PH8DEX0DYE4TJ9P63043C29",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/xpt1286-conjunto-de-jantar"
        },
        hotel: {
            nome: "Diárias em Hotel",
            imagem: "hotel.jpg",
            qrCode: "hotelQR.jpg",
            descricao: "Duas diárias em um hotel para o casal passar a sua lua de mel",
            valor: 2400,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654072400.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JNEFSZ3J50ZMYQ4XXZXJWVRV6304AC98",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/ayr9792-diarias-em-hotel"
        },
        arcondicionado: {
            nome: "Ar Condicionado",
            imagem: "arcondicionado.jpg",
            qrCode: "arcondicionadoQR.jpg",
            descricao: "Ar condicionado Midea Inverter split 9.000 btu/h frio, 220v",
            valor: 2550,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654072550.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFG4HZY6SD2RVXG0GKMH7MSG6304C3DF",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/ryh7980-ar-condicionado-split"
        },
        loucas: {
            nome: "Lava-Louças Electrolux",
            imagem: "loucas.jpg",
            qrCode: "loucasQR.jpg",
            descricao: "Lava-Louças Electrolux com 8 serviços, painel blue touch inox 110v",
            valor: 2700,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654072700.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JHDSNAAJAKV1B35M4GHNRG1M63042E97",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/hrl6210-lava-loucas-electrolux"
        },
        aluguel: {
            nome: "Aluguel de Carro",
            imagem: "aluguel.jpg",
            qrCode: "aluguelQR.jpg",
            descricao: "Aluguel de veículo durante viagem de lua de mel dos noivos",
            valor: 2800,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654072800.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JNENGHK14B0N86YKJJFR2MVK63042870",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/rkg6850-aluguel-de-carro"
        },
        notebook: {
            nome: "Notebook Sansung",
            imagem: "notebook.jpg",
            qrCode: "notebookQR.jpg",
            descricao: "Notebook Samsung Galaxy, Intel Core i5, 8GB RAM, 256GB SSD",
            valor: 3000,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654073000.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JNEPZHYMP32TBVF8TVRXHEF96304F1D0",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/cka1256-notebook-sansung"
        },
        geladeira: {
            nome: "Geladeira Consul",
            imagem: "geladeira.jpg",
            qrCode: "geladeiraQR.jpg",
            descricao: "Geladeira Consul 410 Litros Frost Free Duples Inox controle interno de temperatura",
            valor: 3190,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654073190.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFH5STH60J62RHAJFAGZY6HN6304BC3D",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/mrp3264-geladeira-consul"
        },
        arportatil: {
            nome: "Ar Condicionado Portátil",
            imagem: "arportatil.jpg",
            qrCode: "arportatilQR.jpg",
            descricao: "Ar condicionado portátil Philco Pac12000 virus protect 110v",
            valor: 3400,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654073400.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JHDX7D4TGYBM09C3HKYN4YQR63047E13",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/eic5619-ar-condicionado-portatil"
        },
        passagem: {
            nome: "Passagem Aérea",
            imagem: "passagem.jpg",
            qrCode: "passagemQR.jpg",
            descricao: "Passagem Aérea para lua de mel com destino para Europa (1x)",
            valor: 3500,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654073500.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JNEEPZXC2ERP6EN2NJDDYHFS63042C05",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/qqo2185-passagem-aerea"
        },
        lavaseca: {
            nome: "Máquina Lava e Seca",
            imagem: "lavaseca.jpg",
            qrCode: "lavasecaQR.jpg",
            descricao: "Maquina de lavar (lava e seca) Hisense Steam Titanium 13Kg",
            valor: 3800,
            pixCode: "00020101021126580014br.gov.bcb.pix01362e00f5b4-46c0-4d13-906b-b00a4ad12c1552040000530398654073800.005802BR5924MATHEUS ZIBORDI PEDREIRA6009SAO PAULO622905251JFH3FGAY2KJANMBQ8RM4VZNC6304BE81",
            linkCartao: "https://loja.infinitepay.io/matheus-e-giovanna/jqm6507-lava-e-seca-13kg"
        }
        
    };

    const container = document.querySelector('.produtos');
    const filtroBotoes = document.querySelectorAll('.filtro-preco');
    

    const renderProdutos = (produtosFiltrados) => {
        container.innerHTML = ''; // Limpa o container
        produtosFiltrados.forEach(produto => {
            const produtoHTML = `
                <div class="produto">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <h2>${produto.nome}</h2>
                    <p>${produto.descricao}</p>
                    <p class="valor">R$ ${produto.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <button class="btn-presentear" data-id="${produto.nome.toLowerCase().replace(/ /g, '-')}">Presentear</button>
                </div>
            `;
            container.innerHTML += produtoHTML;
        });
        
    
        // Reaplica os eventos nos botões "Presentear"
        const botoesPresentear = document.querySelectorAll('.btn-presentear');
        botoesPresentear.forEach(botao => {
            botao.addEventListener('click', () => {
                const produtoId = botao.dataset.id; // Obtém o ID do produto
                const produto = Object.values(produtos).find(p => 
                    p.nome.toLowerCase().replace(/ /g, '-') === produtoId
                ); // Busca o produto correspondente
    
                if (produto) {
                    modalImagem.src = produto.imagem;
                    modalNome.textContent = produto.nome;
                    modalValor.textContent = `R$ ${produto.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                    btnCopiar.dataset.pixCode = produto.pixCode;
                    btnCartao.dataset.linkCartao = produto.linkCartao;
                    modal.style.display = 'block';
                    modalInicial.style.display = 'flex';
                    modalPix.style.display = 'none';
                    modalCartao.style.display = 'none';
                
                    if (!modalInicial.contains(modalTexto)) {
                        modalInicial.appendChild(modalTexto);
                    }
                } else {
                    console.error("Produto não encontrado para o ID:", produtoId);
                }
                
            });
        });
    };
    
    

    // Inicializa a exibição com todos os produtos
    renderProdutos(Object.values(produtos));

    // Adiciona eventos de filtro
    filtroBotoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const min = parseInt(botao.getAttribute('data-min'));
            const max = parseInt(botao.getAttribute('data-max'));

            const produtosFiltrados = Object.values(produtos).filter(produto => produto.valor >= min && produto.valor <= max);
            renderProdutos(produtosFiltrados);
        });
    });

    // Seleciona os elementos
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const menuLateral = document.querySelector(".menu-lateral");

    if (hamburgerMenu && menuLateral) { // Verifica se os elementos existem
        const menuLinks = menuLateral.querySelectorAll("a");

        // Alterna o menu lateral ao clicar no ícone
        hamburgerMenu.addEventListener("click", () => {
            menuLateral.classList.toggle("ativo");
        });

        // Fechar o menu ao clicar fora dele
        document.addEventListener("click", (event) => {
            if (!menuLateral.contains(event.target) && !hamburgerMenu.contains(event.target)) {
                menuLateral.classList.remove("ativo");
            }
        });

        // Fechar o menu ao clicar em qualquer link
        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuLateral.classList.remove("ativo");
            });
        });
    }

    // Funções do modal
    const botoesPresentear = document.querySelectorAll('.btn-presentear');
    const modal = document.getElementById('modal');
    const modalImagem = document.getElementById('modal-imagem');
    const modalNome = document.getElementById('modal-nome');
    const modalValor = document.getElementById('modal-valor');
    const modalInicial = document.getElementById('modal-inicial');
    const modalPix = document.getElementById('modal-pix');
    const modalCartao = document.getElementById('modal-cartao');
    const closeModal = document.getElementById('close-modal');
    const btnCopiar = document.getElementById('btn-copiar');
    const btnPix = document.getElementById('btn-pix');
    const btnCartao = document.getElementById('btn-cartao');

    const modalTexto = document.createElement('p');
    modalTexto.className = 'modal-texto';
    modalTexto.textContent = "Os produtos do site são representações, os presentes serão convertidos em recursos, que serão destinados para despesas e planos dos noivos❤️🎁";

    botoesPresentear.forEach(botao => {
        botao.addEventListener('click', () => {
            const produtoId = botao.dataset.id; // Obtém o ID do produto diretamente
            const produto = produtos[produtoId]; // Busca o produto pelo ID
    
            if (produto) {
                modalImagem.src = produto.imagem;
                modalNome.textContent = produto.nome;
                modalValor.textContent = produto.valor;
                btnCopiar.dataset.pixCode = produto.pixCode;
                btnCartao.dataset.linkCartao = produto.linkCartao;
                modal.style.display = 'block';
                modalInicial.style.display = 'flex';
                modalPix.style.display = 'none';
                modalCartao.style.display = 'none';
    
                if (!modalInicial.contains(modalTexto)) {
                    modalInicial.appendChild(modalTexto);
                }
            } else {
                console.error("Produto não encontrado para o ID:", produtoId);
            }
        });
    });
    

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    btnPix.addEventListener('click', () => {
        modalInicial.style.display = 'none';
        modalPix.style.display = 'flex';
        modalPix.innerHTML = '';
    
        const nomeProduto = modalNome.textContent.toLowerCase();
        const produtoAtual = Object.values(produtos).find(produto => produto.nome.toLowerCase() === nomeProduto);
    
        if (produtoAtual) {
            const qrImg = document.createElement('img');
            qrImg.className = 'modal-qr';
            qrImg.src = produtoAtual.qrCode || '';
            qrImg.alt = produtoAtual.qrCode ? 'QR Code do Pix' : 'Erro ao carregar o QR Code. Tente novamente.';
            modalPix.appendChild(qrImg);
    
            const btnCopiar = document.createElement('button');
            btnCopiar.className = 'btn-copiar';
            btnCopiar.textContent = 'Copiar código Pix';
            btnCopiar.onclick = () => {
                if (produtoAtual?.pixCode) {
                    navigator.clipboard.writeText(produtoAtual.pixCode)
                        .then(() => {
                            btnCopiar.textContent = 'Link copiado!';
                            btnCopiar.classList.add('copiado');
                            setTimeout(() => {
                                btnCopiar.textContent = 'Copiar código Pix';
                                btnCopiar.classList.remove('copiado');
                            }, 2000);
                        })
                        .catch(() => alert('Erro ao copiar o código Pix.'));
                } else {
                    alert('Código Pix indisponível.');
                }
            };
            modalPix.appendChild(btnCopiar);
    
            const btnEnviarComprovante = document.createElement('button');
            btnEnviarComprovante.className = 'btn-enviar';
            btnEnviarComprovante.textContent = 'Enviar comprovante';
            btnEnviarComprovante.onclick = () => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdmgJH_HUEuXcYcMWJbkcg9TE0esXkgTR5khmWntPebE2zp4w/viewform?usp=dialog', '_blank');
            modalPix.appendChild(btnEnviarComprovante);
    
            const btnVoltarPix = document.createElement('button');
            btnVoltarPix.id = 'btn-voltar-pix';
            btnVoltarPix.className = 'btn-voltar';
            btnVoltarPix.textContent = 'Voltar';
            btnVoltarPix.onclick = () => {
                modalPix.style.display = 'none';
                modalInicial.style.display = 'flex';
            };
            modalPix.appendChild(btnVoltarPix);
        } else {
            alert('Produto não encontrado.');
        }
    });
    
    btnCartao.addEventListener('click', () => {
        modalInicial.style.display = 'none';
        modalCartao.style.display = 'flex';
        modalCartao.innerHTML = '';
    
        const nomeProduto = modalNome.textContent.toLowerCase();
        const produtoAtual = Object.values(produtos).find(produto => produto.nome.toLowerCase() === nomeProduto);
    
        if (produtoAtual) {
            const btnIrParaPagamento = document.createElement('button');
            btnIrParaPagamento.className = 'btn-pix';
            btnIrParaPagamento.textContent = 'Link de pagamento';
            if (produtoAtual.linkCartao) {
                btnIrParaPagamento.onclick = () => {
                    window.open(produtoAtual.linkCartao, '_blank');
                };
            } else {
                console.error('Link de pagamento não disponível para este produto.');
            }
            modalCartao.appendChild(btnIrParaPagamento);
    
            const btnEnviarComprovante = document.createElement('button');
            btnEnviarComprovante.className = 'btn-enviar';
            btnEnviarComprovante.textContent = 'Enviar comprovante';
            btnEnviarComprovante.onclick = () => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdmgJH_HUEuXcYcMWJbkcg9TE0esXkgTR5khmWntPebE2zp4w/viewform?usp=dialog', '_blank');
            modalCartao.appendChild(btnEnviarComprovante);
    
            const btnVoltarCartao = document.createElement('button');
            btnVoltarCartao.id = 'btn-voltar-cartao';
            btnVoltarCartao.className = 'btn-voltar';
            btnVoltarCartao.textContent = 'Voltar';
            btnVoltarCartao.onclick = () => {
                modalCartao.style.display = 'none';
                modalInicial.style.display = 'flex';
            };
            modalCartao.appendChild(btnVoltarCartao);
        } else {
            alert('Produto não encontrado.');
        }
    });
    

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        


});
