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


## Llicenciament
Ubuntu compta amb una llicència **GPL (GNU General Public License)**, que permet als usuaris modificar, compartir i utilitzar el sistema de manera lliure.

Hi ha diferents tipus de llicències en Linux, com ara:

MIT License: semblant a la GPL, autoritza modificar, compartir i fer servir el programari lliurement, però a diferència de la GPL, només exigeix redistribuir el codi amb restriccions mínimes, sempre conservant l’avís de copyright original i la renúncia de responsabilitat.

Apache License: permet als desenvolupadors utilitzar, modificar i redistribuir el programari, requerint que es documentin tots els canvis realitzats.

Alguns conceptes que apareixen sovint en les llicències són:

Copyleft: els usuaris poden usar, modificar i compartir lliurement l’obra. Obliga que les versions derivades mantinguin la mateixa llicència de copyright. Fomenta la col·laboració i l’intercanvi dins la comunitat creativa, com en el cas de la GPL o les llicències Creative Commons.

Copyright: protegeix els drets del creador per controlar l’ús, la distribució i la modificació de l’obra, però no obliga que les obres derivades segueixin els mateixos termes. Serveix per protegir els drets dels creadors i incentivar la innovació. Exemples: All Rights Reserved, Public Domain Dedication, copyright.
## Gestors d'arrencada per a instal·lacions DUALS
## Punts de restauració
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







