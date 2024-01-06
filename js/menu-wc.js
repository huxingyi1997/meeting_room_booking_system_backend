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
                                            'data-bs-target="#controllers-links-module-AppModule-177cd53432321b9e00351879e8063dc315b3ce3a4a1b854d8a7b0e1ebb657afc992a8ba250061d1c58b55b04fc946bf59b9cc1277cf757d462fba4ac52b4bc14"' : 'data-bs-target="#xs-controllers-links-module-AppModule-177cd53432321b9e00351879e8063dc315b3ce3a4a1b854d8a7b0e1ebb657afc992a8ba250061d1c58b55b04fc946bf59b9cc1277cf757d462fba4ac52b4bc14"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-177cd53432321b9e00351879e8063dc315b3ce3a4a1b854d8a7b0e1ebb657afc992a8ba250061d1c58b55b04fc946bf59b9cc1277cf757d462fba4ac52b4bc14"' :
                                            'id="xs-controllers-links-module-AppModule-177cd53432321b9e00351879e8063dc315b3ce3a4a1b854d8a7b0e1ebb657afc992a8ba250061d1c58b55b04fc946bf59b9cc1277cf757d462fba4ac52b4bc14"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-177cd53432321b9e00351879e8063dc315b3ce3a4a1b854d8a7b0e1ebb657afc992a8ba250061d1c58b55b04fc946bf59b9cc1277cf757d462fba4ac52b4bc14"' : 'data-bs-target="#xs-injectables-links-module-AppModule-177cd53432321b9e00351879e8063dc315b3ce3a4a1b854d8a7b0e1ebb657afc992a8ba250061d1c58b55b04fc946bf59b9cc1277cf757d462fba4ac52b4bc14"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-177cd53432321b9e00351879e8063dc315b3ce3a4a1b854d8a7b0e1ebb657afc992a8ba250061d1c58b55b04fc946bf59b9cc1277cf757d462fba4ac52b4bc14"' :
                                        'id="xs-injectables-links-module-AppModule-177cd53432321b9e00351879e8063dc315b3ce3a4a1b854d8a7b0e1ebb657afc992a8ba250061d1c58b55b04fc946bf59b9cc1277cf757d462fba4ac52b4bc14"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
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
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-90bec2677ea5f6392629c89b69369e89617ba8bae097ff3fc1a10ef0e5c35c4fff16cb56915323da47892343e8b5a8a95634d7b52c84920cdd5a600fadd4ef51"' : 'data-bs-target="#xs-controllers-links-module-UserModule-90bec2677ea5f6392629c89b69369e89617ba8bae097ff3fc1a10ef0e5c35c4fff16cb56915323da47892343e8b5a8a95634d7b52c84920cdd5a600fadd4ef51"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-90bec2677ea5f6392629c89b69369e89617ba8bae097ff3fc1a10ef0e5c35c4fff16cb56915323da47892343e8b5a8a95634d7b52c84920cdd5a600fadd4ef51"' :
                                            'id="xs-controllers-links-module-UserModule-90bec2677ea5f6392629c89b69369e89617ba8bae097ff3fc1a10ef0e5c35c4fff16cb56915323da47892343e8b5a8a95634d7b52c84920cdd5a600fadd4ef51"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-90bec2677ea5f6392629c89b69369e89617ba8bae097ff3fc1a10ef0e5c35c4fff16cb56915323da47892343e8b5a8a95634d7b52c84920cdd5a600fadd4ef51"' : 'data-bs-target="#xs-injectables-links-module-UserModule-90bec2677ea5f6392629c89b69369e89617ba8bae097ff3fc1a10ef0e5c35c4fff16cb56915323da47892343e8b5a8a95634d7b52c84920cdd5a600fadd4ef51"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-90bec2677ea5f6392629c89b69369e89617ba8bae097ff3fc1a10ef0e5c35c4fff16cb56915323da47892343e8b5a8a95634d7b52c84920cdd5a600fadd4ef51"' :
                                        'id="xs-injectables-links-module-UserModule-90bec2677ea5f6392629c89b69369e89617ba8bae097ff3fc1a10ef0e5c35c4fff16cb56915323da47892343e8b5a8a95634d7b52c84920cdd5a600fadd4ef51"' }>
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
                                <a href="classes/CustomExceptionFilter.html" data-type="entity-link" >CustomExceptionFilter</a>
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
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserPasswordCaptchaDto.html" data-type="entity-link" >UpdateUserPasswordCaptchaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserPasswordDto.html" data-type="entity-link" >UpdateUserPasswordDto</a>
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