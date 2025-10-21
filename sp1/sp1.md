---
layout: default
title: "Sprint 1: Instal·lació i Configuració Inicial"
---

## Virtualització i instal·lació del SO Ubuntu

He configurat la màquina amb 8 GB de RAM, 2 CPU i un disc de 80 GB, perquè més endavant necessito fer 2 particions de 40 GB cadascuna.

La resta d’opcions són les habituals per garantir compatibilitat i un bon rendiment bàsic a Linux. Pel que fa a la xarxa, he escollit XARXA NAT, que em permet connectar-me a Internet a través de la connexió de l’ordinador amfitrió sense haver de fer configuracions complexes.

<img width="472" height="618" alt="Captura de pantalla de 2025-09-22 13-09-30" src="https://github.com/user-attachments/assets/bc65f6e0-26df-415f-9852-1e1241a01265" />

Per començar en la instal·lació apretarem Try on install ubuntu, i l'unic que canviarem es que farem natros les particions clicant a mas opciones.

<img width="648" height="341" alt="image" src="https://github.com/user-attachments/assets/64185c5a-e63d-43bf-95d7-2c0ec4257311" />


He particionat el disc de 80 GB deixant 40 GB com a espai lliure per a futurs usos i els altres 40 GB els he destinat als fitxers. D’aquests, 25 GB són per a l’arrel, on hi ha el sistema i les aplicacions, 13 GB per al home amb els meus fitxers personals, i 2 GB per al boot amb els fitxers d’arrencada. D’aquesta manera aconsegueixo un equilibri entre espai per al sistema, les dades i possibles ampliacions futures.

<img width="814" height="536" alt="image" src="https://github.com/user-attachments/assets/063b9fb5-3fd9-47c5-a496-a389c4e22829" />

Quan ja haguesem passat les particions creem l'usuari i contrasenya que utilitzarem per iniciar sessió totes les vegades

<img width="806" height="496" alt="image" src="https://github.com/user-attachments/assets/da6be433-b5ff-4b48-978b-251c611bad63" />

Guest Additions

<img width="885" height="435" alt="image" src="https://github.com/user-attachments/assets/2b645804-df63-4421-bd16-e6fc384754b6" />
<br><br>

## Llicenciament
Ubuntu compta amb una llicència **GPL (GNU General Public License)**, que permet als usuaris modificar, compartir i utilitzar el sistema de manera lliure.

Hi ha diferents tipus de llicències en Linux, com ara:

MIT License: semblant a la GPL, autoritza modificar, compartir i fer servir el programari lliurement, però a diferència de la GPL, només exigeix redistribuir el codi amb restriccions mínimes, sempre conservant l’avís de copyright original i la renúncia de responsabilitat.

Apache License: permet als desenvolupadors utilitzar, modificar i redistribuir el programari, requerint que es documentin tots els canvis realitzats.

Alguns conceptes que apareixen sovint en les llicències són:

Copyleft: els usuaris poden usar, modificar i compartir lliurement l’obra. Obliga que les versions derivades mantinguin la mateixa llicència de copyright. Fomenta la col·laboració i l’intercanvi dins la comunitat creativa, com en el cas de la GPL o les llicències Creative Commons.

Copyright: protegeix els drets del creador per controlar l’ús, la distribució i la modificació de l’obra, però no obliga que les obres derivades segueixin els mateixos termes. Serveix per protegir els drets dels creadors i incentivar la innovació. Exemples: All Rights Reserved, Public Domain Dedication, copyright.
## Gestors d'arrencada per a instal·lacions DUALS

Un **gestor d’arrencada** és un programa que permet seleccionar quin sistema operatiu s’inicia quan s’engega l’ordinador.  
A Linux, normalment s’utilitza **GRUB**, mentre que Windows compta amb el seu propi gestor, **BOOTMGR**.

## Tipus de discs

- **MBR**: antic, amb limitació de 4 particions primàries, o bé 3 primàries més 1 estesa, dins de la qual es poden crear particions lògiques.  
- **GPT**: més modern, amb major flexibilitat.

> ⚠️ Si es vol fer una instal·lació dual amb un sistema com Windows (BOOTMGR), que no protegeix els altres gestors, es pot “perdre” l’accés a Linux perquè:

- **BOOTMGR**: sobreescriu el MBR/EFI, només arrenca Windows i no reconeix Linux.  
- **GRUB**: permet gestionar diversos sistemes operatius, detecta Windows, s’instal·la al MBR/EFI i mostra un menú d’arrencada.

En aquesta secció explicaré com configurar un sistema dual i com restaurar **GRUB**, utilitzant:

- **Supergrub2**  
- **ISO d’Ubuntu**

## Instal·lació dual

Primer cal modificar la configuració de **VirtualBox**, ja que requereix alguns ajustos específics. Els canvis són:

1. Activar **EFI**.  
2. Desactivar la connexió de xarxa per evitar haver d’iniciar sessió.  
3. Canviar el tipus de sistema a **Windows** i ajustar la configuració de pantalla per evitar problemes.

## Instal·lació Windows

| Explicació | Foto |
|---------------|---------------|
| Començarem afegint 8G de ram per augmentar la memoria disponible | <img width="867" height="571" alt="Captura de pantalla de 2025-09-30 13-10-15" src="https://github.com/user-attachments/assets/6baf7e28-0fa1-4c56-8386-d5aefd42e922" /> |
| Seguidament llevarem la iso que teniem d'ubuntu i la canviarem per la iso de **Windows 10 enterprise** | <img width="249" height="123" alt="Captura de pantalla de 2025-09-30 13-21-13" src="https://github.com/user-attachments/assets/d8f4dbda-35f9-4ee3-85a8-c6eac811c3f2" /> |
| Cuan arranque clicarem **ESC** per a entrar al **boot menú**, i alli seleccionarem el windows i el començarem a instal·lar| <img width="617" height="595" alt="Captura de pantalla de 2025-09-30 13-22-26" src="https://github.com/user-attachments/assets/4c8c30a5-b276-4cde-9aa7-a2852e0b1328" /> |
| Triarem l'opció de les particions personalitzades, per escollir l'emmagatzematge que tindrà | <img width="601" height="398" alt="Captura de pantalla de 2025-09-30 13-26-16" src="https://github.com/user-attachments/assets/4eabe72c-f7e2-4944-b8e8-2cbc8c91d31b" /> |
| Triarem les 38G que ens sobraben i aqui instal·larem el windows | <img width="637" height="512" alt="Captura de pantalla de 2025-09-30 13-37-18" src="https://github.com/user-attachments/assets/3e5a95e5-d4a2-4997-acaf-cb71e4d7a2d5" /> |

## Partició Windows i Grub desde Ubuntu

Tornarem a entrar al boot menú

<img width="640" height="479" alt="Captura de pantalla de 2025-10-06 11-59-11" src="https://github.com/user-attachments/assets/8f42655c-69c5-431e-a2ed-ecf45f2dfb74" />

Anirem al que posa CD-ROM

<img width="640" height="479" alt="Captura de pantalla de 2025-10-06 11-59-39" src="https://github.com/user-attachments/assets/0d087c56-9ebf-495e-a7b2-aba3eebac674" />

Escollirem Detect and show boot methods, per a que ens detecte l'ubuntu

<img width="640" height="479" alt="Captura de pantalla de 2025-10-06 11-59-43" src="https://github.com/user-attachments/assets/9633120b-fa0e-4194-9069-d483fb17df8a" />

I baixarem fins que trobesem la opció **d'Ubuntu**

<img width="592" height="265" alt="image" src="https://github.com/user-attachments/assets/2d5bde43-a9b6-4e05-8375-c9f61adaa7b7" />

Una vegada dins de l'ubuntu, farem un **apt install --reinstall grub-pc**, el que fa es que reinstal·la el gestor d’arrencada GRUB (versió BIOS) al sistema, reparant-ne els fitxers i permetent tornar-lo a instal·lar al disc

<img width="961" height="344" alt="Captura de pantalla de 2025-10-06 12-13-10" src="https://github.com/user-attachments/assets/f2c778f5-4689-4890-8f4b-5efa008ee0eb" />

Montarem la partició que hem creat abans al **/boot/efi/**

<img width="504" height="51" alt="Captura de pantalla de 2025-10-06 12-18-45" src="https://github.com/user-attachments/assets/14c566f9-3db3-4d1a-941d-f2ebcf72766a" />


| **Instal·lació efi** |
|--------------|
| Instal·larem el efibootmgr i el grub-efi |
| <img width="476" height="110" alt="Captura de pantalla de 2025-10-06 12-34-38" src="https://github.com/user-attachments/assets/11091f68-54db-4f2b-81e2-7fe12be61401" />
<img width="494" height="141" alt="Captura de pantalla de 2025-10-06 12-37-03" src="https://github.com/user-attachments/assets/ff46340a-c825-43a1-bde7-7263390c35be" /> |


Utilitzarem la comanda grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=ubuntu, serveix per:

Aquí ho tens en llenguatge Markdown:

La comanda `grub-install` instal·la el **GRUB** (*GRand Unified Bootloader*), que és el programari que s'executa en engegar l'ordinador i et permet triar quin sistema operatiu iniciar.

A continuació es detalla cada part de la comanda:

* `--target=x86_64-efi`: Especifica que la instal·lació és per a un sistema modern de **64 bits** (`x86_64`) amb firmware **UEFI** (`efi`).

* `--efi-directory=/boot/efi`: Indica la ubicació de la partició especial del sistema (coneguda com a ESP o *EFI System Partition*), on es desen els fitxers d'arrencada.

* `--bootloader-id=ubuntu`: Assigna el nom "**ubuntu**" a aquesta entrada al menú d'arrencada de la UEFI per poder identificar-la fàcilment, especialment si hi ha altres sistemes operatius instal·lats.
<img width="996" height="55" alt="Captura de pantalla de 2025-10-06 12-37-44" src="https://github.com/user-attachments/assets/92548768-047b-4c65-9016-d0e22d5e1dc3" />

I fins aqui perque la màquina virtual no reconeix la partició.


<br><br>
## Punts de restauració

Primerament farem un **apt install timeshift**, aquesta eina s'utilitza per restaurar el sistema si una actualització la trenca
<img width="1170" height="321" alt="Captura de pantalla de 2025-10-07 12-50-18" src="https://github.com/user-attachments/assets/84d2d8ac-d713-4461-962e-3ec857cca57c" />

Desprès agafarem un disc buit de 20 GB i creem una única partició que ocupara tot el seu espai
<img width="938" height="619" alt="Captura de pantalla de 2025-10-07 12-53-08" src="https://github.com/user-attachments/assets/39db787f-2703-49f4-a84c-a57ce0d7842e" />

Podem veure com s'ha creat la partició

<img width="644" height="232" alt="Captura de pantalla de 2025-10-07 12-53-32" src="https://github.com/user-attachments/assets/71f9f910-5899-45c5-8d2d-8525a0f12d40" />

Seguidament podrem veure com s'ha formatat la partició /dev/sdb1 perquè pugui ser utilitzada per un sistema operatiu Linux per a emmagatzemar fitxers i carpetes
<img width="836" height="319" alt="Captura de pantalla de 2025-10-07 12-55-48" src="https://github.com/user-attachments/assets/eb7aac0e-04dd-434d-a1c6-ddc0eb73ad89" />

A continuació farem un **ls** per veure les carpetes que tenim a la nostra **/home**, farem un touch **hola**, per crear un fitxer, també farem un **mkdir hola** per crear una carpeta, amb **ls** podrem veure com s'ha creat correctament

<img width="992" height="165" alt="Captura de pantalla de 2025-10-07 12-56-59" src="https://github.com/user-attachments/assets/38f82ecb-5cd2-443e-b9a6-1cb21ad2e4e5" />
<br><br>

| Explicació | Foto |
|---------------|---------------|
| Una vegada fet tot l'anterior, ens surtira l'aplicació del timeshift, entrarem i ens surtirà l'assistent de configuració, triarem RSYNC | <img width="394" height="205" alt="Captura de pantalla de 2025-10-07 12-57-26" src="https://github.com/user-attachments/assets/27dcfdb0-290c-4f0b-90ba-c2bd2c3ee236" /> |
| Seguidament escolliren el sdb1 que es el disc que hem creat anteriorment | <img width="580" height="210" alt="Captura de pantalla de 2025-10-07 12-58-01" src="https://github.com/user-attachments/assets/b4405e79-6436-4a75-a7d8-bace89cefda5" /> |
| Ficarem que només cuan arranque | <img width="580" height="588" alt="Captura de pantalla de 2025-10-07 12-59-05" src="https://github.com/user-attachments/assets/848fa171-63c9-40c0-961f-b943852c7c51" /> |
| Finalment posarem que s'exclueixin tots els fitxers de root, i que s'inclueixin tots els fitxers de l'usuari aaron de la carpeta **/home/aaron** | <img width="809" height="193" alt="Captura de pantalla de 2025-10-07 12-59-41" src="https://github.com/user-attachments/assets/428db28b-ec48-4a37-baa5-be296b6e3603" /> 


Poden veure que ja hem finalitzat l'instantanea, tardarà uns 10 minuts en fer-se
<img width="773" height="625" alt="Captura de pantalla de 2025-10-07 13-00-19" src="https://github.com/user-attachments/assets/965e3be5-aac1-484c-a6c9-41ec2f5c094f" />

Crearem una altra instantanea, anirem a --> **crea*, i alli se'ns començarà a crear l'instantanea
<img width="773" height="625" alt="Captura de pantalla de 2025-10-07 13-03-03" src="https://github.com/user-attachments/assets/5065d9a6-b26c-4b2e-98aa-5b6c7c4443bf" />

Aqui podem veure com se'ns a creat l'ultima instantanea que estavem fent
<img width="773" height="625" alt="Captura de pantalla de 2025-10-07 13-04-39" src="https://github.com/user-attachments/assets/eeca681b-8dd5-4b60-a6ed-d82392c307dc" />

Ara el que farem serà borrar la carpeta adeu i el fitxer hola, això ho farem per recuperarem l'instantanea que hem creat i podrem recuperar-ho

<img width="615" height="253" alt="Captura de pantalla de 2025-10-07 13-09-26" src="https://github.com/user-attachments/assets/84e9fcec-0abe-448f-b19b-7b4a29aaef64" />


| **Recuperació** |
|--------------|
| Seleccionarem l'instantanea i clicarem a -->**recuperar**, farem siguiente, siguiente ,siguiente |
| <img width="432" height="410" alt="Captura de pantalla de 2025-10-07 13-17-47" src="https://github.com/user-attachments/assets/eb33de0a-8140-418b-8a2f-6d89f8f420ed" /><img width="301" height="422" alt="Captura de pantalla de 2025-10-07 13-18-13" src="https://github.com/user-attachments/assets/c17e171a-c4e5-4ebc-bab5-3ce526ba3080" />  
  <img width="301" height="422" alt="Captura de pantalla de 2025-10-07 13-18-19" src="https://github.com/user-attachments/assets/307f987e-3ec5-4173-b041-390c2c868c20" />  |

Es reiniciara el sistema i amb una pantalla grisa, vol dir que s'està carregant l'instantanea
<img width="806" height="805" alt="Captura de pantalla de 2025-10-07 13-18-44" src="https://github.com/user-attachments/assets/000aabeb-7d93-4565-b927-100795377155" />

Finalment farem un ls i podrem veure que si teniem ben feta l'instantanea tindrem altra vegada la carpeta hola i el fitxer hola
<img width="613" height="99" alt="Captura de pantalla de 2025-10-07 13-19-20" src="https://github.com/user-attachments/assets/04cb81cb-94e2-4fb2-8f8a-8a37f3f803aa" />
<br><br>

## Configuració de la xarxa
Per configurar la xarxa el primer que farem serà anar  a la xarxa, per crear una nova, anirem a ipv4, i canviarem de dhcp a manual, ficarem la ip 192.168.203.156, serà /24 (255.255.255.0), i de gateway ficarem la 192.168.203.1
<img width="740" height="596" alt="Captura de pantalla de 2025-10-07 13-43-31" src="https://github.com/user-attachments/assets/47758039-7da6-482c-983b-32044e0050ed" />

Farem un ping a 8.8.8.8, per comprovar la connectivitat
<img width="898" height="394" alt="Captura de pantalla de 2025-10-07 13-44-05" src="https://github.com/user-attachments/assets/93836d20-6f92-4709-b5ec-ee0af2e9d847" />

Seguidament anirem a /etc/netplan/ i l'archiu .yaml, l'utilitzarem per configurar la red, farem un **netplan apply** per a aplicar la configuració

<img width="792" height="333" alt="Captura de pantalla de 2025-10-07 13-52-10" src="https://github.com/user-attachments/assets/52eefb4f-f552-494e-ae90-7c94b4ef58a8" />

Finalment farem un ping a 8.8.8.8 per veure la connectivitat que te
<img width="895" height="362" alt="Captura de pantalla de 2025-10-07 13-52-24" src="https://github.com/user-attachments/assets/15c8f693-37b2-4ef6-96cf-60f08116a24c" />

## Comandes generals i instal·lacions
Començarem fent un apt-cache policy, per veure les versions que tenim a la nostra màquina
<img width="885" height="233" alt="2025-10-20_12-51" src="https://github.com/user-attachments/assets/a2f972c8-2512-4a4c-9a09-96f952ddb574" />

Seguidament crearem l'archiu **audacity** dins de /etc/apt/preferences.d, que ja be per defecte
<img width="612" height="57" alt="2025-10-20_13-03" src="https://github.com/user-attachments/assets/54a87eb4-b3e5-499f-a3fa-4ac83cb39591" />

Dins de l'archiu posarem, el nom del paquet, l'altra versió de les 2 que tenim, (agafarem la que no va per defecte), i li canviarem la prioritat

<img width="369" height="76" alt="2025-10-20_13-03_1" src="https://github.com/user-attachments/assets/710df75a-bfe6-4c68-9186-8b22ae5854b6" />

Aqui podem veure com ja s'ha canviat la versió
<img width="882" height="224" alt="2025-10-20_13-04" src="https://github.com/user-attachments/assets/493dd457-df59-4cf5-9908-c5d857104638" />

Instal·larem la dependencia
<img width="859" height="156" alt="2025-10-20_13-07" src="https://github.com/user-attachments/assets/9ceaecea-5b58-4ff9-ab2f-5e8ff4751a67" />

Finalment farem un **apt install audacity** i podem veure com ha instal·lat la versió que hem canviat
<img width="725" height="185" alt="2025-10-20_13-07_1" src="https://github.com/user-attachments/assets/ca721d46-51af-4fd8-9b38-975c16905b13" />







