<template>
  <div class="fullLayout">
    <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar class="menu justify-evenly">
          <q-toolbar-title class="flex items-center justify-between">
            <span class="flex items-center faleConoscoNav">
              <q-avatar icon="fa-brands fa-whatsapp" size="3em" />
              <div style="font-size:0.8em">Clique para falar conosco</div>
            </span>
            <q-img src="/media/logo_menu2.png"
              style="height: 100px; max-width: 100px;position: absolute;margin-left: auto;margin-right: auto;left: 0;right: 0;top: 20px" />
          </q-toolbar-title>
          <q-btn flat label="Home" class="navButton"></q-btn>
          <q-btn flat label="Serviços" class="navButton"></q-btn>
          <q-btn flat label="A Colmeia" class="navButton"></q-btn>
          <q-btn flat label="Sobre Nós" class="navButton"></q-btn>
          <q-btn flat label="Login" to="/login" style="margin-left:215px;margin-right:10px"></q-btn>
          <q-btn outline color="secondary" label="Criar Conta" rounded />
        </q-toolbar>
      </q-header>
      <section class="sessaoHome">
        <div class="sessaoHome-margin"></div>
        <div class="row justify-center items-center">
          <div class="col-12 flex items-center justify-center text-bold q-pb-sm text-white">Oi, eu sou a Bee
            <q-img class="q-ml-sm" src="/media/honeybee.png" style="max-width:30px" />
          </div>
          <div class=" col-12 text-center q-pb-sm text-white" style="font-weight:900;font-size:6em;">Bem vindo a
            Colmeia!
          </div>
          <br class="col-12">
          <div class="text-center text-white" style="font-size:1.2em">
            Independente do produto oferecido, a <strong>publicidade</strong> mantém a comunicação
            viva e dinâmica,<br> possuindo o poder de <strong>impulsionar</strong>, influenciar e fazer com que
            <strong>seu negócio</strong><br>
            alcance uma escala mundial, <strong>através da internet.</strong>
          </div>
          <div class="col-12 flex justify-center q-gutter-x-xl" style="padding-top:50px">
            <q-btn color="white" class="q-mb-sm" :ripple="{ color: 'amber' }" no-caps>
              <div class="text-bold text-black">Fale Conosco</div>
            </q-btn>
            <q-btn class="venhaParaColmeiaButton q-mb-sm" text-color="black" icon-right="chevron_right"
              :ripple="{ color: 'amber' }" no-caps>
              <div class="text-bold">Venha para a Colméia</div>
            </q-btn>
            <q-btn color="white" class="q-mb-sm" :ripple="{ color: 'amber' }" no-caps>
              <div class="text-bold text-black">Veja o Porfólio</div>
            </q-btn>
          </div>
        </div>
      </section>
      <section class="sessaoServicos">
        <div class="row justify-center sessaoServicos-container">
          <div class="col-12 text-center text-h4 text-white">Nossos Serviços</div>
          <q-img src="/media/intercessao1.png" class="sessaoServicos-container--image" style="position: absolute;top:25%;max-width:60px;" />
          <q-tabs v-model="tab" class="bg-none tabsServicos q-mt-xl" align="justify"
            style="min-width:80vw;min-height: 110px;">
            <div class="flex justify-around full-width">
              <q-tab name="publicidade">
                <q-img src="/media/servPublicidade.png" style="height:80px;width:80px" />
                <q-tooltip class="bg-secondary">
                  <div class="text-black text-bold">Publicidade</div>
                </q-tooltip>
                <div></div>
              </q-tab>
              <q-tab name="marketing">
                <q-img src="/media/servMarketing.png" style="height:80px;width:80px" />
                <q-tooltip class="bg-secondary">
                  <div class="text-black text-bold">Marketing</div>
                </q-tooltip>
                <div></div>
              </q-tab>
              <q-tab name="webDev">
                <q-img src="/media/servWebDev.png" style="height:80px;width:80px" />
                <q-tooltip class="bg-secondary">
                  <div class="text-black text-bold">Criação de Sites e Aplicações Web</div>
                </q-tooltip>
                <div></div>
              </q-tab>
              <q-tab name="relacoesPublicas">
                <q-img src="/media/servRelacPub.png" style="height:80px;width:80px" />
                <q-tooltip class="bg-secondary">
                  <div class="text-black text-bold">Relações Públicas</div>
                </q-tooltip>
                <div></div>
              </q-tab>
            </div>
          </q-tabs>
          <q-tab-panels v-model="tab" animated style="min-width:80vw;min-height:800px;background:#121214;color:white;">
            <q-tab-panel name="publicidade">
              <div class="row q-mt-xl">
                <div class="col-7 col-md-7">
                  <q-img src="/media/panelPublicidade.png" class="sessaoServicos-container--image-text" />
                </div>
                <div class="col-5 col-md-5 relative-position">
                  <q-img src="/media/imgPublicidade.png" class="sessaoServicos-container--image-pub" style="width:500px;" />
                </div>
                <div class="col-4 col-md-4">
                  <q-btn color="secondary" dense no-caps style="position: absolute;bottom:450px;left:100px">
                    <div class="text-bold text-black flex items-center q-pl-sm">Contrate nossos serviços!
                      <q-icon name="chevron_right" />
                    </div>
                  </q-btn>
                  <q-list dark style="max-width: 500px;position:absolute;top:370px;left:40px">
                    <q-expansion-item dense-toggle group="collapsePublicidade" label="Direção de Arte"
                      switch-toggle-side>
                      <q-separator />
                      <q-card class="bgDropdownPanel">
                        <q-card-section>
                          Nosso time de direção de arte será responsável pela elaboração de todo o visual de um projeto,
                          ou seja, a identidade visual. Isso se torna um conjunto de elementos que diferenciam uma
                          empresa, um produto ou serviço através de um conceito implantando por trás da marca.
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                    <q-expansion-item dense-toggle group="collapsePublicidade" label="Gestão de Mídias Sociais"
                      switch-toggle-side>
                      <q-separator />
                      <q-card class="bgDropdownPanel">
                        <q-card-section>
                          Dentro do Social Media, diversos trabalhos serão feitos com o intuito de gerar tráfego
                          orgânico, passar credibilidade para a marca e claro humanizar a empresa para que as pessoas se
                          conectem.
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                    <q-expansion-item dense-toggle group="collapsePublicidade" label="Captação de Imagens e Vídeos"
                      switch-toggle-side>
                      <q-separator />
                      <q-card class="bgDropdownPanel">
                        <q-card-section>
                          Indiferente do nicho das empresas, é necessário sempre trabalhar com mídias em altíssima
                          qualidade. No caso da publicidade, esse conteúdo faz com que o público realmente se
                          identifique com o produto, expressando a realidade da melhor forma possível, quando nos
                          dirigimos ao virtual.
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                  </q-list>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="marketing">
              <div class="row q-mt-xl">
                <div class="col-7 col-md-7">
                  <q-img src="/media/panelMarketing.png" class="sessaoServicos-container--image-text" />
                </div>
                <div class="col-5 col-md-5 relative-position">
                  <q-img src="/media/imgMarketing.png" class="sessaoServicos-container--image-pub" style="width:500px" />
                </div>
                <div class="col-4 col-md-4">
                  <q-btn color="secondary" dense no-caps style="position: absolute;bottom:450px;left:100px">
                    <div class="text-bold text-black flex items-center q-pl-sm">Contrate nossos serviços!
                      <q-icon name="chevron_right" />
                    </div>
                  </q-btn>
                  <q-list dark style="max-width: 500px;position:absolute;top:370px;left:40px">
                    <q-expansion-item dense-toggle group="collapseMarketing" label="Direção de Criação"
                      switch-toggle-side>
                      <q-separator />
                      <q-card class="bgDropdownPanel">
                        <q-card-section>
                          O time de direção de criação será responsável pelo desenvolvimento de campanhas, onde
                          tomaremos as melhores decisões para transformar suas ideias em um conceito extremante rentável
                          para nós.
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                    <q-expansion-item dense-toggle group="collapseMarketing" label="Gestão de Tráfego"
                      switch-toggle-side>
                      <q-separator />
                      <q-card class="bgDropdownPanel">
                        <q-card-section>
                          Após o desenvolvimento da campanha, faremos a análise dos resultados para otimizar e
                          impulsionar o máximo possível, diminuindo o valor investido por compra e aumentando o retorno
                          sobre o investimento.
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                    <q-expansion-item dense-toggle group="collapseMarketing" label="Plataformas" switch-toggle-side>
                      <q-separator />
                      <q-card class="bgDropdownPanel">
                        <q-card-section>
                          Com a nossa análise conjunta, definiremos qual a melhor plataforma que atenderá o seu negócio,
                          em nosso leque podemos apresentar o Google meu Negócio e o Facebook Business!
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                  </q-list>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="webDev">
              <div class="row q-mt-xl">
                <div class="col-7 col-md-7">
                  <q-img src="/media/panelWebDev.png" class="sessaoServicos-container--image-text" />
                </div>
                <div class="col-5 col-md-5 relative-position">
                  <q-img src="/media/imgWebDev.png" class="sessaoServicos-container--image-pub" style="width:500px" />
                </div>
                <div class="col-4 col-md-4">
                  <q-btn color="secondary" dense no-caps style="position: absolute;bottom:450px;left:100px">
                    <div class="text-bold text-black flex items-center q-pl-sm">Contrate nossos serviços!
                      <q-icon name="chevron_right" />
                    </div>
                  </q-btn>
                  <q-list dark style="max-width: 500px;position:absolute;top:370px;left:40px">
                    <q-expansion-item dense-toggle group="collapseWebDev" label="Landing Pages" switch-toggle-side>
                      <q-separator />
                      <q-card class="bgDropdownPanel">
                        <q-card-section>
                          Se você deseja impulsionar o seu negócio de uma forma rápida e eficaz as Landing Pages podem
                          ser utilizadas para aumentar o alcance da sua marca e atrair clientes em potencial, e
                          coletando informações para permanecer em contato com cada um deles.
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                    <q-expansion-item dense-toggle group="collapseWebDev" label="E-Commerces" switch-toggle-side>
                      <q-separator />
                      <q-card class="bgDropdownPanel">
                        <q-card-section>
                          Destinado para aqueles que necessitam escalar o seu negócio, reduzir custos e facilitar a
                          experiência do seu consumidor final podemos propor uma solução E-commerce para seu
                          empreendimento. Oferecemos um canal onde você possa comercializar os seus produtos por meio de
                          um site exclusivo e personalizado e, se preferir, centralizar ali as suas operações.
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                    <q-expansion-item dense-toggle group="collapseWebDev" label="Aplicações Web" switch-toggle-side>
                      <q-separator />
                      <q-card class="bgDropdownPanel">
                        <q-card-section>
                          Com uma equipe especializada em desenvolvimento de software nas tecnologias mais atuais
                          disponíveis no mercado como frameworks JavaScript, PHP, entre outros. Podemos desenvolver seu
                          software com altíssima qualidade, estratégia, flexibilidade e garantia de entrega.
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                  </q-list>
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="relacoesPublicas">
              <div class="row q-mt-xl">
                <div class="col-7 col-md-7">
                  <q-img src="/media/panelRelacPub.png" class="sessaoServicos-container--image-text" />
                </div>
                <div class="col-5 col-md-5 col-sm-6">
                  <q-img src="/media/imgRelacPub.png" class="sessaoServicos-container--image-imgRelacPub" />
                </div>
                <div class="col-4 col-md-4">
                  <q-btn color="secondary" dense no-caps style="position: absolute;bottom:450px;left:100px">
                    <div class="text-bold text-black flex items-center q-pl-sm">Contrate nossos serviços!
                      <q-icon name="chevron_right" />
                    </div>
                  </q-btn>
                  <q-list dark style="max-width: 500px;position:absolute;top:370px;left:40px">
                    <q-expansion-item dense-toggle group="collapseRelacPub" label="Direção de Arte" switch-toggle-side>
                      <q-separator />
                      <q-card class="bgDropdownPanel">
                        <q-card-section>
                          Lorem ipsum.
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                    <q-expansion-item dense-toggle group="collapseRelacPub" label="Gestão de Mídias Sociais"
                      switch-toggle-side>
                      <q-separator />
                      <q-card class="bgDropdownPanel">
                        <q-card-section>
                          Lorem ipsum.
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                    <q-expansion-item dense-toggle group="collapseRelacPub" label="Captação de Imagens e Vídeos"
                      switch-toggle-side>
                      <q-separator />
                      <q-card class="bgDropdownPanel">
                        <q-card-section>
                          Lorem ipsum.
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                  </q-list>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </section>
      <section class="sessaoColmeia">
        <div class="row justify-center" style="padding-top: 180px">
          <q-img src="/media/intercessao2.png" style="position: absolute;top:63.5%;max-width:60px;" />
        </div>
        <div style="background:transparent;padding-top:80px">
          <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
            control-color="primary" navigation padding arrows height="625px" style="background:transparent">
            <q-carousel-slide :name="1" class="column no-wrap">
              <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img class="rounded-borders col-4 full-height" src="/media/equipeSalvador.png" />
                <q-img class="rounded-borders col-4 full-height" src="/media/equipeGuilherme.png" />
                <q-img class="rounded-borders col-4 full-height" src="/media/equipeBeatriz.png" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
              <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img class="rounded-borders col-4 full-height" src="/media/equipeGian.png" />
                <q-img class="rounded-borders col-4 full-height" src="/media/equipeFillipe.png" />
                <q-img class="rounded-borders col-4 full-height" src="/media/equipeMax.png" />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </section>
      <div class="whatsappButton flex items-center justify-center">
        <div class="hex">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <i class="fa-brands fa-whatsapp animated tada text-h5" style="color:#FFD335;"></i>
        <div class="hex">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <q-tooltip class="bg-secondary text-black">
          <div class="text-bold">Fale conosco</div>
        </q-tooltip>
      </div>
    </q-layout>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',

  setup() {
    return {
      tab: ref('publicidade'),
      slide: ref(1)
    }
  }
})
</script>
<style lang="scss" scoped>
* {
  letter-spacing: 0.00001em;
}

.fullLayout {
  background: #121214
}

.menu {
  background: #181818;
  height: 65px;
}

.faleConoscoNav,
.navButton {
  cursor: pointer;
  transition: all 0.1s ease;
}

.faleConoscoNav:hover,
.navButton:hover {
  color: $secondary;
}

.sessaoHome {
  background: url("/media/fundo-site_01.png");
  background-size: cover;
  background-position: center 20px;
  background-repeat: no-repeat;
  min-height: 100vh;
  max-height: 100vh;

  &-margin {
    min-width: 100%;
    min-height: 300px;
  }

  @media (max-width: 769px) {
    max-height: none;

    &-margin {
      min-height: 130px;
    }
  }
}

.sessaoServicos {
  background: #121214;
  min-height: 100vh;

  &-container {
    padding-top: 180px;
  }

  &-container--image-text {
    width: 700px;
  }

  @media (max-width: 769px) {
    &-container {
      padding-top: 50px;
    }

    &-container--image {
      display: none;
    }

    &-container--image-pub {
      width: 300px !important;
      position: absolute;
      bottom: -100px;
    }

    &-container--image-imgRelacPub {
      width: 500px;
    }
  }

  @media (max-width: 480px) {
    &-container--image-text {
      width: 350px;
    }

    &-container--image-pub {
      width: 150px !important;
      bottom: -40px;
    }

    &-container--image-imgRelacPub {
      width: 150px;
      bottom: -80px;
    }
  }
}

.sessaoColmeia {
  background: url("/media/fundo-site_02.png");
  background-size: cover;
  background-position: center 20px;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.tabsServicos {
  color: $secondary;
}

.bgDropdownPanel {
  background: #121214;
}

.venhaParaColmeiaButton {
  background-image: linear-gradient(16deg, $colmeia-button, #FFD335);
  box-shadow: 8px 3px 3px rgba($color: #FFCF30, $alpha: 0.1);
  transition: all 0.3s ease;
}

.venhaParaColmeiaButton:hover {
  box-shadow: none;
  transform: translate(3px, 3px);
}

.teste {
  min-height: 100vh;
  background-size: auto;
  background: url("/media/fundo-site_02.png");
}

$sqrt3: 1.7320508075688772;
$edgeSize: 35px;
$hexWidth: $edgeSize * 2;
$hexHeight: $sqrt3 * $edgeSize;

// Display
$borderHover: 10px;
//$soft-white: rgba(255, 255, 255, 1);
$soft-white: #FFD335;

// Easing
$ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
$ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);

body {
  background: #151515;
  margin-top: 100px;
}

/* End of container */

// Contains 2 hexagons (.hex)
.whatsappButton {
  position: sticky;
  transform: translate3d(-50%, -50%, 0) rotate(30deg);
  cursor: pointer;
  width: $hexWidth;
  height: $hexHeight;
  float: right;
  bottom: 30px;
  right: 30px;

  &:last-child {
    margin-right: 0;
  }

  // Hover state
  &:hover {
    .hex:last-child {
      opacity: 1;
      transform: scale(1.3);
    }

    .hex:first-child {
      opacity: 1;

      div:before,
      div:after {
        height: $borderHover;
      }

      transform: scale(1.2);
    }
  }
}

// Contains 3 div that makes the hexagon
.hex {
  position: absolute;
  top: 0;
  left: $edgeSize/2;
  width: $edgeSize;
  height: $hexHeight;
  opacity: 0.5;

  // Inset
  &:first-child {
    transform: scale(0.9);
    transition: all 0.3s $ease-out-quart;
    z-index: 0;
  }

  // Outset
  &:last-child {
    transition: all 0.3s $ease-out-expo;
    z-index: 1;
  }

  div {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    width: $edgeSize;
    height: $hexHeight;

    &:before,
    &:after {
      content: ' ';
      position: absolute;
      background: $soft-white;
      width: 100%;
      height: 1px;

      transition: height 0.3s $ease-out-quart;
    }

    &:before {
      top: 0;
    }

    &:after {
      bottom: 0;
    }

    &:nth-child(1) {
      transform: rotate(0deg);
    }

    &:nth-child(2) {
      transform: rotate(60deg);
    }

    &:nth-child(3) {
      transform: rotate(120deg);
    }

    transform-origin: center center;
  }
}

//Wpp Icon Animation - Tada Effect
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated:hover {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

@-webkit-keyframes tada {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes tada {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    -ms-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    -ms-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    -ms-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.tada {
  -webkit-animation-name: tada;
  animation-name: tada;
}
</style>
