# 🌀  Sprint 3: Administració de Dominis i Seguretat
  INSTAL·LACIÓ DOMINI LDAP I UNIR CLIENT AL DOMINI
---

- **1. El Servidor:** 
  - Un servidor és un ordinador configurat per oferir recursos, dades o serveis a altres ordinadors (anomenats clients) a través d'una xarxa.
  - Funció principal: Centralitzar la gestió de fitxers, bases de dades o usuaris.
  - Diferència clau: A diferència d'un PC normal, està optimitzat per a la fiabilitat i el treball multiusuari.

- **2. La clau de la IP Fixa:**

  - Perquè un servidor funcioni correctament en una infraestructura de domini, necessita obligatòriament una IP fixa.
  - Si el servidor canviés de direcció IP (IP dinàmica), els clients no podrien trobar-lo per iniciar sessió o demanar serveis, provocant la caiguda de tota la xarxa.

- **3. L'Analogia de l'Estructura Lògica:**

  - En sistemes com Active Directory, l'organització es divideix de forma jeràrquica utilitzant conceptes de la natura:

- **4. El Bosc:**
  - És el contenidor de nivell més alt.
  - Inclou tots els dominis de l'organització.
  - Tots els elements del bosc comparteixen el mateix esquema (les regles del joc).

L'Arbre (Tree)
És un conjunt de dominis que comparteixen un espai de noms continu.
Exemple: Si el domini arrel és escola.com, un subdomini anomenat alumnes.escola.com formaria part del mateix arbre.

Les Branques (Unitats Organitzatives - OU)
  - Són divisions dins d'un domini.
  - S'utilitzen per organitzar els objectes de manera lògica (per departaments, per plantes d'un edifici, etc.).
  - Permeten aplicar polítiques de seguretat específiques a cada grup.


## SERVER

Creem la ip fixa mitjançant interficie

<img width="569" height="455" alt="2026-01-12_12-02" src="https://github.com/user-attachments/assets/d626eaa6-aac6-4fd9-993f-68678224b917" />

<br>

Fem un ping a google.es i a 8.8.8.8 per a comprovar que tenim conexio

<img width="805" height="317" alt="2026-01-12_12-06" src="https://github.com/user-attachments/assets/d0590f73-b6e8-4eb7-81df-1e835eeecb64" />

Entrem al /etc/hostname i el canviem

<img width="373" height="42" alt="2026-01-12_12-08" src="https://github.com/user-attachments/assets/21602446-62ab-4e70-b680-1a71ecfd9696" />


Entrarem al /etc/hosts i canviarem el hostname i afegirem una linea amb el domini aaron.cat

<img width="463" height="87" alt="2026-01-12_12-10" src="https://github.com/user-attachments/assets/93ae3a5c-bd3a-41a9-866b-595f80018a06" />

Instal·larem el slapd i el ldap-utils

<img width="706" height="303" alt="2026-01-12_12-25" src="https://github.com/user-attachments/assets/22012ca7-1189-44f2-adf7-0716f3d97fcc" />


Farem un slapcat per veure el que tenim al domini

<img width="472" height="273" alt="2026-01-12_12-27" src="https://github.com/user-attachments/assets/23222ac1-6eca-459c-be86-c5d871194f92" />

Anirem a la carpeta de **Baixades**, farem un ls, i descomprimirem el zip arxius, que hem descarregat previament del moodle

<img width="638" height="215" alt="2026-01-12_12-28" src="https://github.com/user-attachments/assets/f45926a9-bd5d-42bb-9228-04f0beb66e9b" />

Seguidament farem un dpkg-reconfigure slapd per a reconfigurar la base de dades

<img width="630" height="18" alt="2026-01-12_12-28_1" src="https://github.com/user-attachments/assets/c627fa0f-23d2-462b-acb5-f058b161685a" />
<br></br>

| Explicació | Captura Base de dades |
| :--- | :--- |
| Ometrem la configuració que ens dona predeterminada per a inserir el que volem | <img width="811" height="133" alt="2026-01-12_12-29" src="https://github.com/user-attachments/assets/c678b72a-a773-40bb-bb95-62b8e1258ea6" /> |
| Ficarem el nom del domini que hem ficat abans al **/etc/hosts** | <img width="1745" height="165" alt="2026-01-12_12-29_1" src="https://github.com/user-attachments/assets/ec975f03-99b9-4739-a7a1-846ae0b56148" /> |
| Posem el nom de la nostra organització | <img width="762" height="142" alt="2026-01-12_12-30" src="https://github.com/user-attachments/assets/9a33345e-3d02-4cad-9b5e-4d9bf386e4a2" /> |
| I la contrasenya del directori | <img width="1024" height="152" alt="2026-01-12_12-30_1" src="https://github.com/user-attachments/assets/d861e72d-b9dd-43c0-9b2b-0bc4caf9f425" />|
| Eliminem la base de dades | <img width="613" height="131" alt="2026-01-12_12-31" src="https://github.com/user-attachments/assets/e1933160-890c-4ecd-b672-a73c5804c4a0" />|
| Finalment moure la base de dades | <img width="1778" height="143" alt="2026-01-12_12-31_1" src="https://github.com/user-attachments/assets/addb6583-f2a1-42c6-89ab-d1a8adf1f1f8" />|

<br></br>

Farem un slapcat altra vegada per veure que s'ha guardat la informació que hem introduit

<img width="498" height="263" alt="2026-01-12_12-33" src="https://github.com/user-attachments/assets/c1fb629e-2821-42d5-b680-c4602093130c" />



| Canvi del domini | Captura Fitxers |
| :--- | :--- |
| Fitxer uo.ldif | <img width="403" height="124" alt="2026-01-12_12-37" src="https://github.com/user-attachments/assets/dcb08d41-8936-405b-a03d-a921f59fc1e1" /> |
| Fitxer grup.ldif | <img width="398" height="142" alt="2026-01-12_12-38" src="https://github.com/user-attachments/assets/bb9a4589-7322-42da-9e80-9fd97bc1905b" />|
| Fitxer usu.ldif | <img width="404" height="387" alt="2026-01-12_12-39" src="https://github.com/user-attachments/assets/c52c23b6-05ca-431c-b2f9-cbcfe32123f0" /> |


Per alimentar i estructurar el nostre directori, utilitzem l'eina ldapadd per carregar fitxers de dades en format LDIF. En aquesta fase, s'executa la comanda de forma seqüencial per crear la jerarquia del domini dc=aaron,dc=cat. Primer, s'insereix la Unitat Organitzativa (ou=users) mitjançant el fitxer uo.ldif per definir la "branca" on viuran els objectes. Seguidament, es dona d'alta l'usuari alu1 amb el fitxer usu.ldif i, finalment, es crea el grup d'alumnes amb grup.ldif. Durant tot el procés, s'utilitza el paràmetre -D per autenticar-nos com a administrador (cn=admin), el paràmetre -W perquè el sistema ens demani la contrasenya de forma segura, i -x per utilitzar autenticació simple, assegurant així que tota l'estructura d'objectes quedi correctament integrada en la base de dades del servidor.

<img width="962" height="206" alt="2026-01-12_12-41" src="https://github.com/user-attachments/assets/c4eadef3-4116-40ab-8a8c-1ab99b635f0b" />
<br></br>

## CLIENT

1. Instal·lació de paquets necessaris
El primer pas és instal·lar les llibreries i serveis que permeten la comunicació amb el servidor LDAP i la memòria cau de noms:

apt install libnss-ldap libpam-ldap nscd -y

  - libnss-ldap: Permet que el sistema busqui usuaris i grups a la base de dades LDAP.
  - libpam-ldap: Proporciona el mòdul d'autenticació PAM per a LDAP.
  - nscd: Servei de memòria cau per accelerar les consultes de noms.
<img width="731" height="23" alt="2026-01-12_13-00" src="https://github.com/user-attachments/assets/4663372a-8f66-42df-81a9-cbc35f0556e1" />


2. Configuració del paquet ldap-auth-config
Durant la instal·lació (o executant dpkg-reconfigure ldap-auth-config), apareixerà un assistent per configurar la connexió:

URI del servidor LDAP: Indiquem l'adreça IP o el nom de domini del servidor. En el meu cas, utilitzo l'adreça IP per evitar problemes amb la resolució de noms: ldap://10.0.2.15.


<img width="1648" height="181" alt="2026-01-12_13-01" src="https://github.com/user-attachments/assets/d8b0397b-64fc-47c0-8c50-ddf904452ddd" />


Base de cerca (Search Base): Definim el nom distingit (DN) on es faran les cerques d'usuaris: dc=aaron,dc=cat.


<img width="692" height="198" alt="2026-01-12_13-01_1" src="https://github.com/user-attachments/assets/4e3742c0-2b0b-4f2d-9fa9-0c8f835577a2" />


Versió del protocol: Seleccionem la versió 3, que és l'estàndard actual i més segur.
<img width="673" height="219" alt="2026-01-12_13-02" src="https://github.com/user-attachments/assets/70486d33-926c-4d6f-8609-cab50cedfb61" />

3. Gestió de permisos i comptes d'administrador
Continuant amb l'assistent, configurem com el sistema local interactuarà amb la base de dades LDAP:

Base de dades local com a admin: Marquem que Sí per permetre que les utilitats de contrasenyes es comportin de manera similar a les locals.

<img width="666" height="259" alt="2026-01-12_13-02_1" src="https://github.com/user-attachments/assets/2ab01327-a2a8-4aa6-a383-3b72fdcea80e" />


Requerir login per a la base de dades: En aquest cas, he marcat que Sí, ja que el meu servidor no permet consultes anònimes.

<img width="619" height="191" alt="2026-01-12_13-02_2" src="https://github.com/user-attachments/assets/172ceeed-b3ce-4084-83de-7cb59c932109" />

Compte de root per a LDAP: Definim el compte amb privilegis per fer canvis (com modificar contrasenyes): cn=admin,dc=aaron,dc=cat.

<img width="542" height="189" alt="2026-01-12_13-03" src="https://github.com/user-attachments/assets/c8411926-809c-4524-aaf4-54ace018e3fd" />

Contrasenya de l'administrador: Introduïm la credencial corresponent que es guardarà de forma segura a /etc/ldap.secret.

<img width="680" height="258" alt="2026-01-12_13-03_1" src="https://github.com/user-attachments/assets/3639facc-2a6b-4554-bea5-1b864bbfd7c0" />



4. Verificació i reconfiguració
Si en qualsevol moment ens equivoquem o necessitem canviar algun paràmetre de la configuració guiada, podem tornar a llançar l'assistent amb la següent comanda:

dpkg-reconfigure ldap-auth-config

<img width="645" height="23" alt="2026-01-12_13-05" src="https://github.com/user-attachments/assets/943bb525-ffcc-4306-ac51-7cdc34f8c48c" />

| Pas | Captura Base |
| :--- | :--- |
| Marcarem que si per a que el sistema configure automáticament la conexió a un servidor de usuaris (LDAP) | <img width="852" height="137" alt="2026-01-12_13-07" src="https://github.com/user-attachments/assets/046ad874-5160-4996-8db8-dfb442ea904c" /> |
| Utilitzarem md5 | <img width="1773" height="533" alt="2026-01-12_13-08" src="https://github.com/user-attachments/assets/96f5a9a8-991d-4fe4-b731-19bd856c934e" /> |

Establirem l'ordre de prioritat que seguirà el sistema operatiu per a la cerca i resolució de noms d'usuaris, grups i contrasenyes. En afegir el paràmetre ldap al principi de les línies passwd, group, shadow i gshadow, s'està indicant al sistema que consulti primer el servidor LDAP abans de buscar en els fitxers locals del propi equip (files)

<img width="1058" height="217" alt="2026-01-12_13-10" src="https://github.com/user-attachments/assets/a64fd6ce-8840-4fc3-a5b8-f13d6ce14a62" />

Modificarem el fitxer /etc/pam.d/common-session per habilitar la creació automàtica de directoris de treball. Mitjançant la línia pam_mkhomedir.so, el sistema genera la carpeta personal de l'usuari a /home en el moment del seu primer inici de sessió, utilitzant /etc/skel com a plantilla. Això és imprescindible en entorns LDAP, ja que garanteix que els usuaris de xarxa tinguin un espai local on desar els seus fitxers sense necessitat de crear-lo manualment per a cada persona

<img width="1153" height="640" alt="2026-01-12_13-14" src="https://github.com/user-attachments/assets/ad2ac310-0575-43b5-ba32-b9eb156ea48c" />

Seguidament borrarem tots els use_authok del archiu **common-password**

<img width="1083" height="695" alt="2026-01-12_13-15" src="https://github.com/user-attachments/assets/d33d333f-6207-4380-be47-3f0b397a6c1c" />

Habilitarem l'inici de sessió manual a la pantalla de benvinguda de Linux. En afegir la línia greeter-show-manual-login=true, es permet que qualsevol usuari del servidor LDAP pugui escriure el seu nom i contrasenya directament, ja que aquests usuaris de xarxa no apareixen automàticament al llistat d'usuaris locals del sistema

<img width="696" height="83" alt="2026-01-12_13-16" src="https://github.com/user-attachments/assets/9fac6a79-e7a2-4e3c-88c8-667798385424" />

L'execució de getent passwd | grep alu1 confirma que el sistema reconeix correctament l'usuari de xarxa i les seves dades, mentre que l'ordre su alu1 demostra que l'accés és funcional i que l'usuari pot iniciar sessió al sistema amb èxit. Aquest pas final valida que la integració entre el servidor i el client s'ha completat correctament

<img width="579" height="78" alt="2026-01-12_13-17" src="https://github.com/user-attachments/assets/3059d1ca-2ef1-4a18-89f0-d2a3292ac0f2" />

Finalment farem un whoami per saber qui som, i ens mourem a la carpeta home per veure la carpeta **alu1**

<img width="472" height="175" alt="2026-01-12_13-22" src="https://github.com/user-attachments/assets/b0d1ac31-3d8b-4371-b67b-b3e1c08eef4d" />




## Servidor Samba

### Server

Instal·larem samba
<img width="450" height="73" alt="2026-01-26_11-50" src="https://github.com/user-attachments/assets/92b41e8e-229d-4ed7-8ac9-29f18a2fbf6b" />

## 1. Preparació del Sistema de Fitxers
S'ha creat la infraestructura de carpetes al directori arrel i s'han ajustat els permisos de Linux per evitar conflictes amb el servei de xarxa.
<img width="605" height="373" alt="2026-01-26_11-54" src="https://github.com/user-attachments/assets/3c4cf88c-957c-47ea-a068-513b9b3439ac" />

## 2. Gestió d'Usuaris i Grups
  - S'han definit les identitats que tindran accés al servei Samba.
  - Creació d'usuaris del sistema: S'han creat els usuaris blau, roig i groc amb el paràmetre -s /sbin/nologin. Això garanteix que no puguin entrar a la terminal del servidor, augmentant la seguretat.
  - Configuració de grups: S'ha creat el grup color i s'hi han afegit els usuaris groc i roig.
  - Alta a Samba: S'ha utilitzat smbpasswd -a per a cada usuari. Aquest pas és imprescindible perquè Samba utilitza la seva pròpia base de dades de contrasenyes, independent de la del sistema.
<img width="640" height="420" alt="2026-01-26_11-56" src="https://github.com/user-attachments/assets/0324f0cb-1724-4ac9-9bcc-0f722680e313" />

## 3. Configuració del Recurs Compartit (Samba)

S'ha editat el fitxer /etc/samba/smb.conf per definir les regles del recurs anomenat [proves].

Paràmetres configurats:

  - path = /proves: Ruta de la carpeta al servidor.
  - guest ok = yes: Permet que usuaris sense compte es connectin com a convidats.
  - read list: Llista d'usuaris que només poden llegir (blau, el grup @color i guest).
  - write list: Usuaris amb permís d'escriptura (blau i guest).
  - invalid users = roig: Prohibició explícita d'accés per a l'usuari roig, que invalida qualsevol altre permís que pogués tenir.
<img width="496" height="192" alt="2026-01-26_12-04" src="https://github.com/user-attachments/assets/3fbcdf0c-b594-46ba-ace0-3c5b27871659" />


## 4. Aplicació i Reinici del Servei
Finalment, per tal que els canvis a la configuració siguin efectius, s'ha procedit a reiniciar els serveis:
  - Comanda: systemctl restart smbd nmbd.
Això reinicia tant el servei de transferència de fitxers (smbd) com el de resolució de noms en xarxa de Windows (nmbd).
<img width="436" height="56" alt="2026-01-26_12-06" src="https://github.com/user-attachments/assets/d1db344f-e436-47f6-bbbb-1eae4f776f9b" />


### Client

## 1. Instal·lacio smbclient

Instal·larem el smbclient a la nostra maquina client

<img width="539" height="74" alt="2026-01-26_12-29" src="https://github.com/user-attachments/assets/16834b93-ed9e-443a-9216-ca1f2b47d1bb" />

Farem un ip a per veure la ip del client, i farem un ping al servidor el meu te la ip **10.0.2.15**
<img width="879" height="403" alt="2026-01-26_12-32" src="https://github.com/user-attachments/assets/5716e34f-d56f-46ac-ab95-d9ea897aba93" />

Anirem als archius i farem un smb://10.0.2.15 **la ip del server** /proves/, amb aixo en podrem connectar
<img width="864" height="520" alt="2026-01-26_12-37" src="https://github.com/user-attachments/assets/63b0769d-8fd2-4ea9-99eb-d456f01f6e47" />

