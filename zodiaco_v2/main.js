function MudaDesenho(){
    
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const dia = document.querySelector('#dia').value;
    const mes = document.querySelector("#mes").value;
    const cebola = document.querySelector("h2");
    const data = "2023"+"/"+ mes + "/" + dia; 
    
    if (data <= "2023/03/21" && "2023/04/20") {
        texto.innerHTML = "ARIES";
        imagem.setAttribute("src","./img/aries.png");
        imagem.setAttribute("width","300px");
        cebola.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX,que protege a Casa de Áries no Santuário Hábil na restauração de Armaduras,  é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco"
    }
    else if  (data >= "2023/01/21" && "2023/02/19"){
        texto.innerHTML = "AQUÁRIO";
        imagem.setAttribute("src","./img/aquario.png");
        imagem.setAttribute("width","300px");
        cebola.innerHTML = "Camus de Aquário é o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria. foi obrigado a lutar contra Hyoga no Santuário. "
    }
    
      else if  (data >= "2023/04/21" && "2023/05/20"){
        texto.innerHTML = "TOURO";
        imagem.setAttribute("src","./img/touro.png");
        imagem.setAttribute("width","300px");
        cebola.innerHTML = "Aldebaran é o Cavaleiro de Ouro de Touro do século XX, que protege a Casa de Touro no Santuário. Dotado de uma resistência fora do comum, nem mesmo o Meteoro de Pégaso de Seiya conseguiu causar danos ao seu corpo. O Grande Chifre, alusão ao chifre de um touro bravo, é um golpe lançado quando está engatado com o inimigo. Mas se desferido depois, de longe, sua potência dobra. De personalidade franca e despachada, confia no que sente, sem se preocupar com as aparências ou racionalidades."
    }
    else if  (data >= "2023/02/20" && "2023/03/20"){
        texto.innerHTML = "PEIXES";
        imagem.setAttribute("src","./img/peixes.png");
        imagem.setAttribute("width","300px");
        cebola.innerHTML = "Masami Kurumada deu ao cavaleiro de ouro de peixes o nome de Afrodite, que na mitologia grega é considerada a deusa do amor, da beleza e da fertilidade."
        
    }
    else if  (data >= "2023/06/21" && "2023/07/21"){
        texto.innerHTML = "CANCER ";
        imagem.setAttribute("src","./img/cancer.png");
        imagem.setAttribute("width","300px");
        cebola.innerHTML = "O verdadeiro nome do Cavaleiro de Câncer até hoje não foi revelado, sendo somente chamado de Máscara da Morte (Deathmask no original). Esse apelido, se deve ao fato de colecionar os rostos das pessoas mortas por ele como troféus em sua casa, e o fato de ser um assassino cruel, não medindo esforços para ganhar.1 d"
       
    }
    else if  (data >= "2023/07/22" && "2023/08/22"){
        texto.innerHTML = "LEÃO";
        imagem.setAttribute("src","./img/leao.png");
        imagem.setAttribute("width","300px");
        cebola.innerHTML = "irmão de Aiolos. Apesar de sua personalidade explosiva, tem um coração puro que distingue rapidamente os justos, por isso foi um dos primeiros Cavaleiros de Ouro a reconhecer a autoridade de Atena. Como seu irmão Aiolos foi condenado como traidor, ele tenta limpar o nome da família jurando fidelidade ao Grande Mestre, até participando voluntariamente do extermínio dos Cavaleiros de Bronze. "
       
    }
    else if  (data >= "2023/08/23" && "2023/09/22"){
        texto.innerHTML = "VIRGEM ";
        imagem.setAttribute("src","./img/virgem.png");
        imagem.setAttribute("width","300px");
        cebola.innerHTML = "Shaka de Virgem (乙女座バルゴのシャカ Barugo no Shaka?) é o Cavaleiro de Ouro de Virgem do Século XX, que protege a Casa de Virgem no Santuário. Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências."
       
    }
    else if  (data >= "2023/09/23" && "2023/10/22"){
        texto.innerHTML = "LIBRA";
        imagem.setAttribute("src","./img/libra.png");
        imagem.setAttribute("width","300px");
        cebola.innerHTML = "O aparentemente inofensivo Mestre Ancião nada mais é do que Dohko, o cavaleiro de Libra. Absurdamente poderoso e responsável, o mentor de Shiryu encantou os fãs tanto na forma como o conhecemos, já velhinho e supostamente frágil, quanto atuando no campo de batalha durante a saga de Hades."
       
    }
    else if  (data >= "2023/10/23" && "2023/11/22"){
        texto.innerHTML = "ESCORPIÃO";
        imagem.setAttribute("src","./img/escorpiao.png");
        imagem.setAttribute("width","300px");
        cebola.innerHTML = "Milo de Escorpião (蠍座のミロ Sukōpion no Miro) foi, no século XX, o Cavaleiro de Ouro de Escorpião que protegia a Casa de Escorpião no Santuário. Era um Cavaleiro fiel ao Santuário, inicialmente obedecendo as ordens do Grande Mestre, embora houvesse ocasiões em que ele se negaria a realizar missões específicas por questões de orgulho"
       
    }
    else if  (data >= "2023/11/22" && "2023/12/21"){
        texto.innerHTML = "SAGITÁRIO";
        imagem.setAttribute("src","./img/sagitario.png");
        imagem.setAttribute("width","300px");
        cebola.innerHTML = "Aiolos de Sagitário (射手座サジタリアスのアイオロス Sajitariasu no Aiorosu?) é o Cavaleiro de Ouro de Sagitário do século XX. Antes de morrer, há 13 anos, entregou Atena ainda bebê e sua Armadura de Ouro aos cuidados de Mitsumasa Kido, que estava viajando pela Grécia. Desde então, Aiolos passou a ser considerado um traidor no Santuário, que era comandado por Saga disfarçado de Grande Mestre. Mesmo morto, sua alma continua a controlar sua Armadura de Sagitário, sempre ajudando, nos momentos críticos "
       
    }
    else if  (data >= "2023/01/20" && "2023/12/22"){
        texto.innerHTML = "CAPRICÓRNIO ";
        imagem.setAttribute("src","./img/capricornio.png");
        imagem.setAttribute("width","300px");
        cebola.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a décima casa do Santuário, a Casa de Capricórnio; é o cavaleiro que carrega o poder da espada Excalibur em seu braço direito. Ele é um dos principais personagens de Saint Seiya, sendo um Cavaleiro de Ouro e se considerando o cavaleiro mais fiel à deusa Atena."
       
    }
    else if  (data >= "2023/05/21" && "2023/06/20"){
        texto.innerHTML = "GEMEOS ";
        imagem.setAttribute("src","./img/gemeos.png");
        imagem.setAttribute("width","300px");
        cebola.innerHTML = "Saga de Gêmeos (双子座ジェミニのサガ Jemini no Saga?) é o irmão gêmeo mais velho de Kanon, pedestinado a se tonar o Cavaleiro de Ouro de Gêmeos do século XX, que antigamente era tido como o próximo sucessor do Grande Mestre, tendo todas as características necessárias para o posto – humanidade, habilidade e força física. "
       
    }
   
    else{
        texto.innerHTML = "Cavaleiro não encontrado...";
        imagem.setAttribute("src","./img/errado.jpg");
        imagem.setAttribute("width","250px");
        
       
    }
}
