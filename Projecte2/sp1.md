

# GUIA PRÀCTICA: Instal·lació i configuració de Windows

## Fase 1 - Instal·lació del sistema operatiu
* **Pas 1-3:** Crear la màquina virtual amb VirtualBox.
* **Pas 4:** Assignar recursos: RAM mínim 4 GB i disc mínim 40 GB.
* **Pas 5:** Carregar la ISO de Windows 10 o 11, instal·lar el sistema (idioma, usuari, contrasenya) i comprovar que arrenca correctament.

<img width="523" height="695" alt="1" src="https://github.com/user-attachments/assets/9ef72319-1951-4a26-af22-ecddc100c550" />

**Instal·lem windows**

1.1

<img width="621" height="446" alt="2" src="https://github.com/user-attachments/assets/2b924342-fcf9-4334-81f2-91afa3377504" />

1.2

<img width="622" height="454" alt="3" src="https://github.com/user-attachments/assets/8bd68a45-416b-462f-ba0f-87efd22bbcd0" />

1.3

<img width="602" height="435" alt="4" src="https://github.com/user-attachments/assets/c1c920c0-f083-4a9b-a0db-bbc77ff45ba7" />

1.4

<img width="756" height="408" alt="5" src="https://github.com/user-attachments/assets/633b66e3-d0c2-4c10-8441-3f2a2613c80d" />

1.5

<img width="538" height="399" alt="6" src="https://github.com/user-attachments/assets/d7ce5868-61a6-4e8c-9e77-84a36c72c17d" />

## Fase 2 - Punts de restauració

* **Pas 6-7:** Cercar "Crear un punt de restauració" i activar la protecció del sistema al disc C:.

<img width="403" height="479" alt="7" src="https://github.com/user-attachments/assets/30988f37-49e5-4467-aa18-2fa672571fa2" />

* **Pas 8:** Crear un punt manual.

<img width="413" height="476" alt="8" src="https://github.com/user-attachments/assets/31cfd8bd-9da8-4152-9b56-52039dc50888" />

* **Pas 9-10:** Realitzar un canvi (instal·lar app), restaurar i comprovar que el sistema torna a l'estat anterior.

| Columna A | Columna B |
| :--- | :--- |
| <img width="662" height="527" alt="9" src="https://github.com/user-attachments/assets/292bd306-ba9e-4a69-848b-8f7c51a8dc27" />
 | <img width="123" height="127" alt="10" src="https://github.com/user-attachments/assets/33d0bf83-1d60-4732-904a-5a38c27cdf7c" /> |
| <img width="685" height="640" alt="11" src="https://github.com/user-attachments/assets/f306ccb3-31b9-49d4-a9b9-9f2c52afad22" />| 
<img width="390" height="139" alt="12" src="https://github.com/user-attachments/assets/636239f9-6951-4fc3-91eb-023fc7481b09" /> |

## Fase 3 - Llicències de Windows
* **Pas 11-12:** Obrir Configuració → Sistema → Activació per comprovar l'estat.

<img width="486" height="567" alt="1" src="https://github.com/user-attachments/assets/f3cda008-c5f9-47df-bebf-087f2460a9eb" />

* **Pas 13:** Executar al cmd: `slmgr /xpr` per veure l'expiració.

<img width="422" height="183" alt="2" src="https://github.com/user-attachments/assets/760801df-c513-49a2-873c-b8c6988ac4d2" />

* **Pas 14:** Esbrinar el tipus de llicenciament
| Tipus de Llicència | Descripció |
| :--- | :--- |
| **Retail (FPP)** | Llicència comercial comprada per separat. Pertany a l'usuari i no a la màquina. |
| **OEM** | Preinstal·lada en equips nous. Queda vinculada permanentment a la placa base d'aquell PC. |
| **Volum** | Orientada a empreses i institucions. Permet activar múltiples ordinadors simultàniament. |
| **Digital** | Llicència vinculada al maquinari i al compte de Microsoft, substituint la clau tradicional. |
| **Subscripció** | Pagament mensual o anual per usuari (ex. *Windows 365*), utilitzada principalment al núvol. |

## Pas 15 - Concultar preu aproximat d'una llicència Windows (web oficial o botigues)

| Edició de Windows | Microsoft Store (Oficial / Retail) | Botigues de tercers (Claus OEM / Mercat gris)* |
| :--- | :--- | :--- |
| **Windows 11 Home** | ~ 145 € | 10 € - 20 € |
| **Windows 11 Pro** | ~ 259 € | 15 € - 30 € |

*> *Nota important:** Les claus de 10-30€ que es venen per internet solen ser llicències OEM (excedents d'empreses o equips antics). Són legals a la Unió Europea a causa de la normativa de revenda de programari, però quedaran vinculades a la teva placa base per sempre i no inclouen suport tècnic directe de Microsoft.

## Fase 4 - Gestor d'arrencada
* **Pas 16-17:** Obrir Command Prompt com administrador i executar `bcdedit`.
<img width="510" height="523" alt="1" src="https://github.com/user-attachments/assets/664611eb-48d6-4f40-8d42-85a4cb481653" />

### Boot Manager

* **`default`**: `{current}` -> Aquest és el sistema que arrenca per defecte.
* **`timeout`**: `30` -> Aquest és el temps d'espera (en segons) abans d'arrencar automàticament.

### Boot Loader

* **`device`**: `partition=C:` -> És la partició on està instal·lat Windows.
* **`path`**: `\WINDOWS\system32\winload.efi` -> És el fitxer que carrega el sistema.
* **`description`**: `Windows 11` -> És el nom del sistema operatiu.

## Pas 20 - Respostes a les preguntes curtes

* **Quin sistema s'està arrencant?**
  S'està arrencant **Windows 11** (es veu al paràmetre `description` del Cargador d'arrencada).

* **A quin disc o partició està instal·lat?**
  Està instal·lat a la **partició C:** (es veu al paràmetre `device` del Cargador d'arrencada).

* **Quant temps espera abans d'arrencar?**
  Espera **30 segons** (es veu al paràmetre `timeout` de l'Administrador d'arrencada).

* **Quin fitxer inicia Windows?**
  L'inicia el fitxer **`\WINDOWS\system32\winload.efi`** (es veu al paràmetre `path` del Cargador d'arrencada).

## Pas 21 - Interpretació final

* **Qui decideix l'arrencada (Boot Manager):** És el gestor principal que llegeix la configuració inicial i decideix quin sistema operatiu s'ha d'executar, basant-se en l'opció per defecte i el temps d'espera.

* **Qui carrega el sistema (Boot Loader):** És el programa específic (com `winload.efi`) que rep l'ordre del Boot Manager i s'encarrega de carregar físicament el nucli de Windows des del disc dur a la memòria RAM per iniciar-lo.


## Fase 5 - Xarxa bàsica
* **Pas 22-23:** Consultar la configuració IP amb la comanda `ipconfig`.

<img width="640" height="418" alt="1" src="https://github.com/user-attachments/assets/b700d8a6-274b-4aac-a546-42fe89e55095" />

* **Pas 24-25:** Configurar IP dinàmica (DHCP) i IP fixa manualment (IP, màscara, gateway, DNS).
<img width="702" height="399" alt="2" src="https://github.com/user-attachments/assets/ab771a39-abdc-41a0-8e2f-2d8621d40391" />
<img width="381" height="739" alt="3" src="https://github.com/user-attachments/assets/4408620c-aef9-41e3-8ddb-a4ea2a8ab2de" />

* **Pas 26:** Comprovar la connexió amb la comanda `ping google.com`.

<img width="540" height="223" alt="4" src="https://github.com/user-attachments/assets/a0d49acc-c2f7-441e-9f15-8e225bfdc0a6" />

## Fase 6 - Comandes generals
### Diferència entre CMD i PowerShell
* **CMD:** Per a comandes bàsiques i clàssiques.
* **PowerShell:** Entorn més potent que permet treballar amb objectes i automatitzar tasques.

<img width="244" height="169" alt="1" src="https://github.com/user-attachments/assets/dd8038ea-c2dc-435a-a20f-f61c0e8dab78" />

### Taula de comandes útils
| Comanda | Acció / Descripció |
| :--- | :--- |
| `dir` | Veure fitxers i carpetes |

<img width="791" height="300" alt="2" src="https://github.com/user-attachments/assets/1a328663-45bb-4aee-b23f-a152b56084a7" />

| `cd` | Moure's per les carpetes del sistema |

<img width="315" height="66" alt="3" src="https://github.com/user-attachments/assets/84328e21-ecf3-4866-80fd-dcaa0bb9a57d" />

| `mkdir prova` | Crear una nova carpeta |

<img width="410" height="224" alt="4" src="https://github.com/user-attachments/assets/4ad25e07-7917-4469-a546-5ef5fefe027d" />

| `echo hola > fitxer.txt` | Crear fitxer |

<img width="418" height="238" alt="5" src="https://github.com/user-attachments/assets/0440b2b6-27e0-4e13-bfbf-841061d0adb9" />

| `del fitxer.txt` | Eliminar fitxer |

<img width="412" height="218" alt="6" src="https://github.com/user-attachments/assets/81f9d685-4121-4aec-9dac-5925f9731be4" />

| `tasklist` | Veure la llista de processos actius |

<img width="614" height="375" alt="7" src="https://github.com/user-attachments/assets/a2876f2f-d0c8-4a02-baa5-b0aedbf37271" />

| `taskkill /IM [nom] /F` | Tancar un procés o aplicació per la força |

<img width="481" height="124" alt="8" src="https://github.com/user-attachments/assets/3cb27e00-85bf-4b68-8d4f-d4c46b99db6c" />

| `systeminfo` | Mostrar informació completa del sistema |

<img width="881" height="532" alt="9" src="https://github.com/user-attachments/assets/5852ebc0-f406-4d44-828f-d854de7ea1c2" />

| `hostname` | Veure el nom de l'equip |

<img width="273" height="76" alt="10" src="https://github.com/user-attachments/assets/b771b741-63e1-45a2-a17d-0b24daaaea28" />

| `whoami` | Usuari actual |

<img width="259" height="80" alt="11" src="https://github.com/user-attachments/assets/54de2590-ac33-49ad-805d-0a0cd3d5d41a" />

| `ipconfig` | Veure configuració ip |
<img width="618" height="384" alt="12" src="https://github.com/user-attachments/assets/0258ea98-5d9c-4474-8998-1e50a599db05" />

| `ping google.com` | Comprovar connexió |

<img width="540" height="223" alt="13" src="https://github.com/user-attachments/assets/6783a1d3-b2bb-42e4-9d59-429101fddb04" />

| `netstat -an` | Llistar les connexions de xarxa obertes |

<img width="536" height="724" alt="14" src="https://github.com/user-attachments/assets/ac775bf0-e047-44f5-b7f5-82af88a6d9b3" />

| `tree` | Veure estructura de carpetes |

<img width="354" height="123" alt="15" src="https://github.com/user-attachments/assets/9ada1ce6-e61d-4e11-8114-404e16e3b1c7" />

| `cls` | Netejar pantalla |
<img width="357" height="128" alt="16" src="https://github.com/user-attachments/assets/a68e867e-9f8d-47f2-b1ee-7e94bf28df3a" />
<img width="295" height="97" alt="17" src="https://github.com/user-attachments/assets/3ae56354-c637-4819-8f02-cbd5c97ff0d7" />

| `help` | Veure ajuda |

<img width="601" height="360" alt="18" src="https://github.com/user-attachments/assets/aa8b29f4-22c5-4f4f-9699-d9830f5df41d" />

| `shutdown /s /t 0` | Apagar l'equip immediatament |

<img width="348" height="38" alt="19" src="https://github.com/user-attachments/assets/153651fc-cae3-4f4a-9e01-7d0e97850c49" />
<img width="303" height="217" alt="20" src="https://github.com/user-attachments/assets/f9ffc69d-30f3-418b-88e1-55f8e5d0487b" />


## Fase 7 - Instal·lació d'aplicacions
* **Pas 34-36:** Descarregar i instal·lar programes des del navegador (ex: Chrome o VS Code).
* **Pas 37-38:** Instal·lar una aplicació directament des de la **Microsoft Store**.
* **Pas 39-40:** Desinstal·lar aplicacions des de Configuració → Aplicacions i verificar que s'han eliminat correctament.
