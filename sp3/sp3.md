# 🌀  Sprint 3: Administració de Dominis i Seguretat
  INSTAL·LACIÓ DOMINI LDAP I UNIR CLIENT AL DOMINI
---

1. El Servidor
  - Un servidor és un ordinador configurat per oferir recursos, dades o serveis a altres ordinadors (anomenats clients) a través d'una xarxa.
  - Funció principal: Centralitzar la gestió de fitxers, bases de dades o usuaris.
  - Diferència clau: A diferència d'un PC normal, està optimitzat per a la fiabilitat i el treball multiusuari.

2. La clau de la IP Fixa
Perquè un servidor funcioni correctament en una infraestructura de domini, necessita obligatòriament una IP fixa.
Si el servidor canviés de direcció IP (IP dinàmica), els clients no podrien trobar-lo per iniciar sessió o demanar serveis, provocant la caiguda de tota la xarxa.

3. L'Analogia de l'Estructura Lògica
En sistemes com Active Directory, l'organització es divideix de forma jeràrquica utilitzant conceptes de la natura:

El Bosc
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


**SERVER**

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


**CLIENT**





Borrem el use_authok
