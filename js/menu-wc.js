'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">meeting_room_booking_system_backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-18b2dc4d28166e1286b98580040ae77c7de0f429e1eacf699e6795d5ae72855f97c4e25aad61c6c33d39cc6a15abb47a2a7f3584313a0ddf9010234763a60c58"' : 'data-bs-target="#xs-controllers-links-module-AppModule-18b2dc4d28166e1286b98580040ae77c7de0f429e1eacf699e6795d5ae72855f97c4e25aad61c6c33d39cc6a15abb47a2a7f3584313a0ddf9010234763a60c58"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-18b2dc4d28166e1286b98580040ae77c7de0f429e1eacf699e6795d5ae72855f97c4e25aad61c6c33d39cc6a15abb47a2a7f3584313a0ddf9010234763a60c58"' :
                                            'id="xs-controllers-links-module-AppModule-18b2dc4d28166e1286b98580040ae77c7de0f429e1eacf699e6795d5ae72855f97c4e25aad61c6c33d39cc6a15abb47a2a7f3584313a0ddf9010234763a60c58"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-18b2dc4d28166e1286b98580040ae77c7de0f429e1eacf699e6795d5ae72855f97c4e25aad61c6c33d39cc6a15abb47a2a7f3584313a0ddf9010234763a60c58"' : 'data-bs-target="#xs-injectables-links-module-AppModule-18b2dc4d28166e1286b98580040ae77c7de0f429e1eacf699e6795d5ae72855f97c4e25aad61c6c33d39cc6a15abb47a2a7f3584313a0ddf9010234763a60c58"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-18b2dc4d28166e1286b98580040ae77c7de0f429e1eacf699e6795d5ae72855f97c4e25aad61c6c33d39cc6a15abb47a2a7f3584313a0ddf9010234763a60c58"' :
                                        'id="xs-injectables-links-module-AppModule-18b2dc4d28166e1286b98580040ae77c7de0f429e1eacf699e6795d5ae72855f97c4e25aad61c6c33d39cc6a15abb47a2a7f3584313a0ddf9010234763a60c58"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BookingModule.html" data-type="entity-link" >BookingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BookingModule-553f36c32d5b8d4825c6c615722f279375a86c46f8d202025d93e4db62f4e0d1633c76064154f749c6da123d10286260e8c69b0d7b7d03438a7fb6ba4a31e3ac"' : 'data-bs-target="#xs-controllers-links-module-BookingModule-553f36c32d5b8d4825c6c615722f279375a86c46f8d202025d93e4db62f4e0d1633c76064154f749c6da123d10286260e8c69b0d7b7d03438a7fb6ba4a31e3ac"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BookingModule-553f36c32d5b8d4825c6c615722f279375a86c46f8d202025d93e4db62f4e0d1633c76064154f749c6da123d10286260e8c69b0d7b7d03438a7fb6ba4a31e3ac"' :
                                            'id="xs-controllers-links-module-BookingModule-553f36c32d5b8d4825c6c615722f279375a86c46f8d202025d93e4db62f4e0d1633c76064154f749c6da123d10286260e8c69b0d7b7d03438a7fb6ba4a31e3ac"' }>
                                            <li class="link">
                                                <a href="controllers/BookingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BookingModule-553f36c32d5b8d4825c6c615722f279375a86c46f8d202025d93e4db62f4e0d1633c76064154f749c6da123d10286260e8c69b0d7b7d03438a7fb6ba4a31e3ac"' : 'data-bs-target="#xs-injectables-links-module-BookingModule-553f36c32d5b8d4825c6c615722f279375a86c46f8d202025d93e4db62f4e0d1633c76064154f749c6da123d10286260e8c69b0d7b7d03438a7fb6ba4a31e3ac"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BookingModule-553f36c32d5b8d4825c6c615722f279375a86c46f8d202025d93e4db62f4e0d1633c76064154f749c6da123d10286260e8c69b0d7b7d03438a7fb6ba4a31e3ac"' :
                                        'id="xs-injectables-links-module-BookingModule-553f36c32d5b8d4825c6c615722f279375a86c46f8d202025d93e4db62f4e0d1633c76064154f749c6da123d10286260e8c69b0d7b7d03438a7fb6ba4a31e3ac"' }>
                                        <li class="link">
                                            <a href="injectables/BookingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmailModule.html" data-type="entity-link" >EmailModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EmailModule-cacb9d42616d6d11de3eb3a5b732c75747f3fd535c6d6f60f9de30c347a6b92221801926d9a698badce739a666286627fcfe5a9382233d7471fb33a3d8481db6"' : 'data-bs-target="#xs-injectables-links-module-EmailModule-cacb9d42616d6d11de3eb3a5b732c75747f3fd535c6d6f60f9de30c347a6b92221801926d9a698badce739a666286627fcfe5a9382233d7471fb33a3d8481db6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmailModule-cacb9d42616d6d11de3eb3a5b732c75747f3fd535c6d6f60f9de30c347a6b92221801926d9a698badce739a666286627fcfe5a9382233d7471fb33a3d8481db6"' :
                                        'id="xs-injectables-links-module-EmailModule-cacb9d42616d6d11de3eb3a5b732c75747f3fd535c6d6f60f9de30c347a6b92221801926d9a698badce739a666286627fcfe5a9382233d7471fb33a3d8481db6"' }>
                                        <li class="link">
                                            <a href="injectables/EmailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeReportModule.html" data-type="entity-link" >FeReportModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FeReportModule-84a8ec8aaa31b1f6f49d8419e8f03bec2bb1c20a23ec8df6aeb47f7fa06ecb8a24dcff869bd06fc59d0d07a6d574d049b76ec37f6533332838574c5af8cca653"' : 'data-bs-target="#xs-controllers-links-module-FeReportModule-84a8ec8aaa31b1f6f49d8419e8f03bec2bb1c20a23ec8df6aeb47f7fa06ecb8a24dcff869bd06fc59d0d07a6d574d049b76ec37f6533332838574c5af8cca653"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FeReportModule-84a8ec8aaa31b1f6f49d8419e8f03bec2bb1c20a23ec8df6aeb47f7fa06ecb8a24dcff869bd06fc59d0d07a6d574d049b76ec37f6533332838574c5af8cca653"' :
                                            'id="xs-controllers-links-module-FeReportModule-84a8ec8aaa31b1f6f49d8419e8f03bec2bb1c20a23ec8df6aeb47f7fa06ecb8a24dcff869bd06fc59d0d07a6d574d049b76ec37f6533332838574c5af8cca653"' }>
                                            <li class="link">
                                                <a href="controllers/FeReportController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeReportController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FeReportModule-84a8ec8aaa31b1f6f49d8419e8f03bec2bb1c20a23ec8df6aeb47f7fa06ecb8a24dcff869bd06fc59d0d07a6d574d049b76ec37f6533332838574c5af8cca653"' : 'data-bs-target="#xs-injectables-links-module-FeReportModule-84a8ec8aaa31b1f6f49d8419e8f03bec2bb1c20a23ec8df6aeb47f7fa06ecb8a24dcff869bd06fc59d0d07a6d574d049b76ec37f6533332838574c5af8cca653"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FeReportModule-84a8ec8aaa31b1f6f49d8419e8f03bec2bb1c20a23ec8df6aeb47f7fa06ecb8a24dcff869bd06fc59d0d07a6d574d049b76ec37f6533332838574c5af8cca653"' :
                                        'id="xs-injectables-links-module-FeReportModule-84a8ec8aaa31b1f6f49d8419e8f03bec2bb1c20a23ec8df6aeb47f7fa06ecb8a24dcff869bd06fc59d0d07a6d574d049b76ec37f6533332838574c5af8cca653"' }>
                                        <li class="link">
                                            <a href="injectables/FeReportService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeReportService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthModule-5734677869afbc4a3d1fc0269e92e24140a455be3bc6c508a3c51040a1f7ffa580270ae83fdd899e969d7e1055a906d7a06fcae4a90743dbcdcc487c55f8e4a3"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-5734677869afbc4a3d1fc0269e92e24140a455be3bc6c508a3c51040a1f7ffa580270ae83fdd899e969d7e1055a906d7a06fcae4a90743dbcdcc487c55f8e4a3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-5734677869afbc4a3d1fc0269e92e24140a455be3bc6c508a3c51040a1f7ffa580270ae83fdd899e969d7e1055a906d7a06fcae4a90743dbcdcc487c55f8e4a3"' :
                                            'id="xs-controllers-links-module-HealthModule-5734677869afbc4a3d1fc0269e92e24140a455be3bc6c508a3c51040a1f7ffa580270ae83fdd899e969d7e1055a906d7a06fcae4a90743dbcdcc487c55f8e4a3"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MeetingRoomModule.html" data-type="entity-link" >MeetingRoomModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MeetingRoomModule-1e5031d6592520b0a95369d3cbdd60ef712cf344b965b80eb445e5b590ad1e2009f5302c129e3136cd4fd7eee1dee0d8dcf42bf6fe5c29d714de73faf266e42e"' : 'data-bs-target="#xs-controllers-links-module-MeetingRoomModule-1e5031d6592520b0a95369d3cbdd60ef712cf344b965b80eb445e5b590ad1e2009f5302c129e3136cd4fd7eee1dee0d8dcf42bf6fe5c29d714de73faf266e42e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MeetingRoomModule-1e5031d6592520b0a95369d3cbdd60ef712cf344b965b80eb445e5b590ad1e2009f5302c129e3136cd4fd7eee1dee0d8dcf42bf6fe5c29d714de73faf266e42e"' :
                                            'id="xs-controllers-links-module-MeetingRoomModule-1e5031d6592520b0a95369d3cbdd60ef712cf344b965b80eb445e5b590ad1e2009f5302c129e3136cd4fd7eee1dee0d8dcf42bf6fe5c29d714de73faf266e42e"' }>
                                            <li class="link">
                                                <a href="controllers/MeetingRoomController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MeetingRoomController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MeetingRoomModule-1e5031d6592520b0a95369d3cbdd60ef712cf344b965b80eb445e5b590ad1e2009f5302c129e3136cd4fd7eee1dee0d8dcf42bf6fe5c29d714de73faf266e42e"' : 'data-bs-target="#xs-injectables-links-module-MeetingRoomModule-1e5031d6592520b0a95369d3cbdd60ef712cf344b965b80eb445e5b590ad1e2009f5302c129e3136cd4fd7eee1dee0d8dcf42bf6fe5c29d714de73faf266e42e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MeetingRoomModule-1e5031d6592520b0a95369d3cbdd60ef712cf344b965b80eb445e5b590ad1e2009f5302c129e3136cd4fd7eee1dee0d8dcf42bf6fe5c29d714de73faf266e42e"' :
                                        'id="xs-injectables-links-module-MeetingRoomModule-1e5031d6592520b0a95369d3cbdd60ef712cf344b965b80eb445e5b590ad1e2009f5302c129e3136cd4fd7eee1dee0d8dcf42bf6fe5c29d714de73faf266e42e"' }>
                                        <li class="link">
                                            <a href="injectables/MeetingRoomService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MeetingRoomService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MinioModule.html" data-type="entity-link" >MinioModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MinioModule-350e9c503c81147ae8f8fb21b0b5e4e75ce9514de19c05211d2da867591d56e84bc954609f1ebf9327fc70e263709f1cffe13f9e000a9b847c5d9b47894480ad"' : 'data-bs-target="#xs-injectables-links-module-MinioModule-350e9c503c81147ae8f8fb21b0b5e4e75ce9514de19c05211d2da867591d56e84bc954609f1ebf9327fc70e263709f1cffe13f9e000a9b847c5d9b47894480ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MinioModule-350e9c503c81147ae8f8fb21b0b5e4e75ce9514de19c05211d2da867591d56e84bc954609f1ebf9327fc70e263709f1cffe13f9e000a9b847c5d9b47894480ad"' :
                                        'id="xs-injectables-links-module-MinioModule-350e9c503c81147ae8f8fb21b0b5e4e75ce9514de19c05211d2da867591d56e84bc954609f1ebf9327fc70e263709f1cffe13f9e000a9b847c5d9b47894480ad"' }>
                                        <li class="link">
                                            <a href="injectables/MinioService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MinioService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RedisModule.html" data-type="entity-link" >RedisModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RedisModule-9241b0111a5f7f82fb51fce67ebd75b8ad76b93eefe250bf5ea4cb0e7ff5bc1cce8512d629e91cdfd74180589823afd92bdd342ee66d9d362ae17ac4b5057ce3"' : 'data-bs-target="#xs-injectables-links-module-RedisModule-9241b0111a5f7f82fb51fce67ebd75b8ad76b93eefe250bf5ea4cb0e7ff5bc1cce8512d629e91cdfd74180589823afd92bdd342ee66d9d362ae17ac4b5057ce3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RedisModule-9241b0111a5f7f82fb51fce67ebd75b8ad76b93eefe250bf5ea4cb0e7ff5bc1cce8512d629e91cdfd74180589823afd92bdd342ee66d9d362ae17ac4b5057ce3"' :
                                        'id="xs-injectables-links-module-RedisModule-9241b0111a5f7f82fb51fce67ebd75b8ad76b93eefe250bf5ea4cb0e7ff5bc1cce8512d629e91cdfd74180589823afd92bdd342ee66d9d362ae17ac4b5057ce3"' }>
                                        <li class="link">
                                            <a href="injectables/RedisService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RedisService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SseModule.html" data-type="entity-link" >SseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SseModule-b509aeb30cdeb973ac72ea42a423a9c42b1d57f4d9f92aa02f03072940d7bcb13d51a5711b3e4c69d18ed0861936f11c08d70f9c781f84a3e5dd21427909b018"' : 'data-bs-target="#xs-controllers-links-module-SseModule-b509aeb30cdeb973ac72ea42a423a9c42b1d57f4d9f92aa02f03072940d7bcb13d51a5711b3e4c69d18ed0861936f11c08d70f9c781f84a3e5dd21427909b018"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SseModule-b509aeb30cdeb973ac72ea42a423a9c42b1d57f4d9f92aa02f03072940d7bcb13d51a5711b3e4c69d18ed0861936f11c08d70f9c781f84a3e5dd21427909b018"' :
                                            'id="xs-controllers-links-module-SseModule-b509aeb30cdeb973ac72ea42a423a9c42b1d57f4d9f92aa02f03072940d7bcb13d51a5711b3e4c69d18ed0861936f11c08d70f9c781f84a3e5dd21427909b018"' }>
                                            <li class="link">
                                                <a href="controllers/SseController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SseController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SseModule-b509aeb30cdeb973ac72ea42a423a9c42b1d57f4d9f92aa02f03072940d7bcb13d51a5711b3e4c69d18ed0861936f11c08d70f9c781f84a3e5dd21427909b018"' : 'data-bs-target="#xs-injectables-links-module-SseModule-b509aeb30cdeb973ac72ea42a423a9c42b1d57f4d9f92aa02f03072940d7bcb13d51a5711b3e4c69d18ed0861936f11c08d70f9c781f84a3e5dd21427909b018"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SseModule-b509aeb30cdeb973ac72ea42a423a9c42b1d57f4d9f92aa02f03072940d7bcb13d51a5711b3e4c69d18ed0861936f11c08d70f9c781f84a3e5dd21427909b018"' :
                                        'id="xs-injectables-links-module-SseModule-b509aeb30cdeb973ac72ea42a423a9c42b1d57f4d9f92aa02f03072940d7bcb13d51a5711b3e4c69d18ed0861936f11c08d70f9c781f84a3e5dd21427909b018"' }>
                                        <li class="link">
                                            <a href="injectables/SseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatisticModule.html" data-type="entity-link" >StatisticModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StatisticModule-502d2f5920a1af851b70c2fa7371e6c117303c2b6ee920133066c14e7255a3301df2f29bcc1ccebdd67ab51bb47ad11b71ad823634c0b7cf56dda172685b2200"' : 'data-bs-target="#xs-controllers-links-module-StatisticModule-502d2f5920a1af851b70c2fa7371e6c117303c2b6ee920133066c14e7255a3301df2f29bcc1ccebdd67ab51bb47ad11b71ad823634c0b7cf56dda172685b2200"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StatisticModule-502d2f5920a1af851b70c2fa7371e6c117303c2b6ee920133066c14e7255a3301df2f29bcc1ccebdd67ab51bb47ad11b71ad823634c0b7cf56dda172685b2200"' :
                                            'id="xs-controllers-links-module-StatisticModule-502d2f5920a1af851b70c2fa7371e6c117303c2b6ee920133066c14e7255a3301df2f29bcc1ccebdd67ab51bb47ad11b71ad823634c0b7cf56dda172685b2200"' }>
                                            <li class="link">
                                                <a href="controllers/StatisticController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StatisticModule-502d2f5920a1af851b70c2fa7371e6c117303c2b6ee920133066c14e7255a3301df2f29bcc1ccebdd67ab51bb47ad11b71ad823634c0b7cf56dda172685b2200"' : 'data-bs-target="#xs-injectables-links-module-StatisticModule-502d2f5920a1af851b70c2fa7371e6c117303c2b6ee920133066c14e7255a3301df2f29bcc1ccebdd67ab51bb47ad11b71ad823634c0b7cf56dda172685b2200"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StatisticModule-502d2f5920a1af851b70c2fa7371e6c117303c2b6ee920133066c14e7255a3301df2f29bcc1ccebdd67ab51bb47ad11b71ad823634c0b7cf56dda172685b2200"' :
                                        'id="xs-injectables-links-module-StatisticModule-502d2f5920a1af851b70c2fa7371e6c117303c2b6ee920133066c14e7255a3301df2f29bcc1ccebdd67ab51bb47ad11b71ad823634c0b7cf56dda172685b2200"' }>
                                        <li class="link">
                                            <a href="injectables/StatisticService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-43507a6cf66ab546472694993ffa0d1cb600c7499260c150acdfedae569c3a778f57cae80ccaee37e6dc16951bb3cdbf2301dca289556bb0a3a6fdfd3e7e536a"' : 'data-bs-target="#xs-controllers-links-module-UserModule-43507a6cf66ab546472694993ffa0d1cb600c7499260c150acdfedae569c3a778f57cae80ccaee37e6dc16951bb3cdbf2301dca289556bb0a3a6fdfd3e7e536a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-43507a6cf66ab546472694993ffa0d1cb600c7499260c150acdfedae569c3a778f57cae80ccaee37e6dc16951bb3cdbf2301dca289556bb0a3a6fdfd3e7e536a"' :
                                            'id="xs-controllers-links-module-UserModule-43507a6cf66ab546472694993ffa0d1cb600c7499260c150acdfedae569c3a778f57cae80ccaee37e6dc16951bb3cdbf2301dca289556bb0a3a6fdfd3e7e536a"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-43507a6cf66ab546472694993ffa0d1cb600c7499260c150acdfedae569c3a778f57cae80ccaee37e6dc16951bb3cdbf2301dca289556bb0a3a6fdfd3e7e536a"' : 'data-bs-target="#xs-injectables-links-module-UserModule-43507a6cf66ab546472694993ffa0d1cb600c7499260c150acdfedae569c3a778f57cae80ccaee37e6dc16951bb3cdbf2301dca289556bb0a3a6fdfd3e7e536a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-43507a6cf66ab546472694993ffa0d1cb600c7499260c150acdfedae569c3a778f57cae80ccaee37e6dc16951bb3cdbf2301dca289556bb0a3a6fdfd3e7e536a"' :
                                        'id="xs-injectables-links-module-UserModule-43507a6cf66ab546472694993ffa0d1cb600c7499260c150acdfedae569c3a778f57cae80ccaee37e6dc16951bb3cdbf2301dca289556bb0a3a6fdfd3e7e536a"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Booking.html" data-type="entity-link" >Booking</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ErrorReportEntity.html" data-type="entity-link" >ErrorReportEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/MeetingRoom.html" data-type="entity-link" >MeetingRoom</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PerformanceEntity.html" data-type="entity-link" >PerformanceEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Permission.html" data-type="entity-link" >Permission</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Role.html" data-type="entity-link" >Role</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BookingListDto.html" data-type="entity-link" >BookingListDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BookingListVo.html" data-type="entity-link" >BookingListVo</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBookingDto.html" data-type="entity-link" >CreateBookingDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMeetingRoomDto.html" data-type="entity-link" >CreateMeetingRoomDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomExceptionFilter.html" data-type="entity-link" >CustomExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmitSSEData.html" data-type="entity-link" >EmitSSEData</a>
                            </li>
                            <li class="link">
                                <a href="classes/ErrorReportDto.html" data-type="entity-link" >ErrorReportDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FreezeUserDto.html" data-type="entity-link" >FreezeUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDto.html" data-type="entity-link" >LoginUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserVo.html" data-type="entity-link" >LoginUserVo</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeetingRoomListDto.html" data-type="entity-link" >MeetingRoomListDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeetingRoomListVo.html" data-type="entity-link" >MeetingRoomListVo</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeetingRoomUsedCountDto.html" data-type="entity-link" >MeetingRoomUsedCountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeetingRoomUsedCountVo.html" data-type="entity-link" >MeetingRoomUsedCountVo</a>
                            </li>
                            <li class="link">
                                <a href="classes/PerformanceDto.html" data-type="entity-link" >PerformanceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PerformanceEntry.html" data-type="entity-link" >PerformanceEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenDto.html" data-type="entity-link" >RefreshTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenVo.html" data-type="entity-link" >RefreshTokenVo</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterCaptchaDto.html" data-type="entity-link" >RegisterCaptchaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDto.html" data-type="entity-link" >RegisterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UnLoginException.html" data-type="entity-link" >UnLoginException</a>
                            </li>
                            <li class="link">
                                <a href="classes/UnloginFilter.html" data-type="entity-link" >UnloginFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMeetingRoomDto.html" data-type="entity-link" >UpdateMeetingRoomDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserPasswordCaptchaDto.html" data-type="entity-link" >UpdateUserPasswordCaptchaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserPasswordDto.html" data-type="entity-link" >UpdateUserPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserBookignCountDto.html" data-type="entity-link" >UserBookignCountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserBookignCountVo.html" data-type="entity-link" >UserBookignCountVo</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDetailVo.html" data-type="entity-link" >UserDetailVo</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserInfo.html" data-type="entity-link" >UserInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserListDto.html" data-type="entity-link" >UserListDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserListVo.html" data-type="entity-link" >UserListVo</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/FormatResponseInterceptor.html" data-type="entity-link" >FormatResponseInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InvokeRecordInterceptor.html" data-type="entity-link" >InvokeRecordInterceptor</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/LoginGuard.html" data-type="entity-link" >LoginGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/PermissionGuard.html" data-type="entity-link" >PermissionGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/JwtUserData.html" data-type="entity-link" >JwtUserData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Request.html" data-type="entity-link" >Request</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});