const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é uma aplicação comum de inteligência artificial na vida cotidiana?",
        alternativas: [
            {
                texto: "Diagnóstico médico",
                afirmacao: "A inteligência artificial pode analisar imagens médicas para identificar doenças com alta precisão. "
            },
            {
                texto: "Construção de pontes",
                afirmacao: "A construção de pontes não utiliza diretamente a inteligência artificial; ela se concentra mais em engenharia civil."
            }
        ]
    },
    {
        enunciado: "Qual é uma das principais preocupações éticas em relação à inteligência artificial?",
        alternativas: [
            {
                texto: "Falta de capacidade de cálculo",
                afirmacao: "A capacidade de cálculo da IA não é geralmente uma preocupação ética; os desafios éticos estão mais relacionados a uso e impacto."
            },
            {
                texto: " Viés algorítmico",
                afirmacao: "Viés algorítmico refere-se a problemas nos dados e nos algoritmos que podem levar a decisões injustas ou discriminatórias."
            }
        ]
    },
    {
        enunciado: "Qual é uma preocupação sobre o impacto da IA no mercado de trabalho?",
        alternativas: [
            {
                texto: "Automação de empregos",
                afirmacao: "Máquinas que substituem trabalhos repetitivos, potencialmente levando ao desemprego."
            },
            {
                texto: "Criação de novos empregos",
                afirmacao: "O desenvolvimento de novas tecnologias que demandam habilidades especializadas e criam novas oportunidades de trabalho."
            }
        ]
    },
    {
        enunciado: "Qual é uma possível aplicação da IA no setor de saúde?",
        alternativas: [
            {
                texto: "Análise preditiva de doenças",
                afirmacao: "Algoritmos que preveem surtos de doenças com base em dados históricos e comportamentais."
            },
            {
                texto: "Assistência robótica em cirurgias",
                afirmacao: "Robôs que ajudam os cirurgiões em procedimentos complexos, aumentando a precisão."
            }
        ]
    },
    {
        enunciado: "Qual é uma área onde a IA pode transformar o setor de transportes?",
        alternativas: [
            {
                texto: "Veículos autônomos",
                afirmacao: "Carros e caminhões que operam sem intervenção humana, melhorando a segurança e eficiência."
            },
            {
                texto: "Gestão de tráfego",
                afirmacao: "Sistemas inteligentes que controlam sinais de trânsito e rotas para minimizar congestionamentos."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
