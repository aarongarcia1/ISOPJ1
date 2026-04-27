# 🌀 Sprint 5: Monitoratge, Auditories i Programari Client/Servidor

Teoria:

Captura Monitorització del sistema (app)

<p>Exercici 1: dos maquines ubuntu i una ha de rebre els logs de l'altre, a part de que s'envii a la propia maquina</p>


## LOGS SISTEMA
### 1. Inspecció del Sistema i Historial d'Arrencada
**Fitxer relacionat:** `/var/log/syslog`  
<img width="1004" height="547" alt="2026-03-02_12-04" src="https://github.com/user-attachments/assets/d3284192-7e3a-43b5-a402-02d52efbdbd8" />

S'ha inspeccionat el log principal per verificar la càrrega de mòduls del nucli (`lp`, `fuse`, `vmwgfx`) i el muntatge d'unitats **Snap**. Es confirma que el sistema registra correctament els esdeveniments de `systemd`.

---

### 2. Estructura de Logs i Política de Rotació
**Fitxers relacionats:** `/var/log/` i `/etc/logrotate.d/rsyslog`  
**Captura:** `2026-03-02_12-07.png`

* S'ha llistat el directori de logs per identificar fitxers específics per servei.
* S'ha analitzat la configuració de `logrotate`, determinant que els logs roten **setmanalment**, es mantenen **4 versions** antigues i s'aplica **compressió** (`delaycompress`) per optimitzar l'espai en disc.

---

### 3. Modificació del Fitxer Mestre de Configuració
**Fitxer relacionat:** `/etc/rsyslog.conf`  
<img width="1027" height="545" alt="2026-03-02_12-10" src="https://github.com/user-attachments/assets/b4bc83f0-03f6-436a-807c-07d176def5ee" />


Accés al fitxer de configuració global. S'ha identificat que les regles específiques d'usuari s'han de gestionar al directori `/etc/rsyslog.d/` per mantenir la modularitat del sistema.

---

### 4. Verificació d'Inserció de Logs (Comanda Logger)
<img width="1134" height="735" alt="2026-03-02_12-16" src="https://github.com/user-attachments/assets/852fc643-039e-47c3-a14a-711ebb304989" />


S'ha utilitzat la comanda `logger` amb els paràmetres:
* `-i`: Registra el PID del procés.
* `-s`: Mostra el missatge també per pantalla.
* `-p`: Defineix la facilitat i prioritat (`kern.notice`).

**Resultat:** El missatge "Prova mireia" s'ha registrat correctament a l'historial del sistema.

---

### 5. Comportament del Filtre de Correu (Mail)
<img width="1131" height="644" alt="2026-03-02_12-18" src="https://github.com/user-attachments/assets/826c657d-f0f3-49e2-84a6-ee4da039d1f1" />


S'ha realitzat una prova amb `mail.notice`. En aquest punt, el sistema ha registrat el missatge "Prova mireia2" a `/var/log/mail.log`, confirmant que el fitxer estava receptiu a nivells de prioritat informativa abans de les modificacions.

---

### 6. Configuració de Prioritat Exclusiva (`=`)
**Fitxer relacionat:** `/etc/rsyslog.d/50-default.conf`  
<img width="732" height="146" alt="2026-03-02_12-20" src="https://github.com/user-attachments/assets/b048d74a-dac3-4fd3-97a1-1347440ab6ec" />


S'ha editat el filtre de correu a:  
`mail.=err    -/var/log/mail.log`  

> **Nota tècnica:** L'ús de l'operador `=` restringeix el log **únicament** a la prioritat indicada, descartant tant les inferiors com les superiors.

---

### 7. Validació del Filtre Exclusiu (Rebuig de Prioritats)
**Captures:** <img width="700" height="509" alt="2026-03-02_12-22" src="https://github.com/user-attachments/assets/2e71ba4e-67fe-4ac7-9829-31a28fa0d1a1" />
<img width="882" height="692" alt="2026-03-02_12-25" src="https://github.com/user-attachments/assets/54588b16-e39c-4774-978d-9021b13c789e" />


* **Prova amb `mail.notice`:** El missatge no s'ha gravat al fitxer (comportament esperat).
* **Prova amb `mail.crit`:** Tot i ser una prioritat superior (Crítica), el sistema **no l'ha registrat** a causa de l'operador `=`. Això demostra un filtratge restrictiu absolut.

---

### 8. Validació del Filtre Exclusiu (Acceptació d'Error)
<img width="964" height="703" alt="2026-03-02_12-24" src="https://github.com/user-attachments/assets/5154953c-c68c-4cb4-8acc-caee58cec681" />


S'ha executat `logger -p mail.err`. En coincidir exactament amb la regla `mail.=err`, el missatge "Prova mireia4" s'ha registrat amb èxit a `/var/log/mail.log`.

---

### 9. Canvi a Filtre de Rang (Prioritat Mínima)
**Fitxer relacionat:** `/etc/rsyslog.d/50-default.conf`  
<img width="738" height="189" alt="2026-03-02_12-25_1" src="https://github.com/user-attachments/assets/e19eeeec-4ea7-44d7-af23-613660e10826" />


S'ha modificat la configuració a:  
`mail.err    -/var/log/mail.log`  

**Conclusió:** En eliminar el `=`, el sistema ara registrarà qualsevol esdeveniment que sigui `error` o superior (`crit`, `alert`, `emerg`), sent aquesta la configuració recomanada per a entorns de producció.
Obrirem una maquina ubuntu que actuara de servidor, aqui farem entrarem a la ruta /var/log


### 10. Configuració de Rang de Prioritat (Sense `=`)
<img width="738" height="189" alt="2026-03-02_12-25_1" src="https://github.com/user-attachments/assets/001788ac-ac99-4ca2-9793-5f84062fa61a" />
<img width="832" height="700" alt="2026-03-02_12-26" src="https://github.com/user-attachments/assets/b4578974-d684-4fa7-80c7-c2c9c970c0aa" />


* **Configuració:** `mail.err`.
* **Resultat:** En eliminar el signe `=`, el sistema registra la prioritat indicada **i totes les superiors**. Es verifica registrant un missatge `mail.crit`, que ara sí que apareix al fitxer de log.

---

### 11. Creació de Logs Personalitzats i Facilitats Comunes
**Fitxer relacionat:** `/etc/rsyslog.d/50-default.conf`  
<img width="740" height="113" alt="2026-03-02_12-28" src="https://github.com/user-attachments/assets/a137dfb2-b226-4336-bcbe-43e0bd3bb333" />
<img width="697" height="681" alt="2026-03-02_12-29" src="https://github.com/user-attachments/assets/4c31be2f-d460-4bc4-8c88-47bf2f100b15" />


* **Configuració:** `*.crit    -/var/log/mireia.log`.
* **Acció:** Es crea una regla per capturar qualsevol facilitat (`*`) amb prioritat crítica en un fitxer nou anomenat `mireia.log`.
* **Verificació:** S'executa `logger -p cron.crit "hola"` i es confirma que el missatge es registra correctament al fitxer personalitzat.

---

### 7. Monitorització amb Journalctl
<img width="1173" height="239" alt="2026-03-02_12-31" src="https://github.com/user-attachments/assets/95b259db-4921-47c0-88d5-0ee79beb7be4" />
<img width="580" height="134" alt="2026-03-02_12-33" src="https://github.com/user-attachments/assets/37bd9bc2-3714-4dc7-abf1-aa5afdb89d4d" />


Es fan servir eines de consulta del diari de `systemd` per verificar les proves anteriors:
* **Per prioritat:** `journalctl -p crit`. Mostra tots els errors crítics del sistema, incloent-hi els missatges de prova ("Prova mireia5", "hola").
* **Per facilitat:** `journalctl --facility=mail`. Mostra exclusivament el trànsit de logs relacionat amb el correu electrònic, permetent rastrejar totes les proves realitzades (`mireia2` fins a `mireia6`).


## SERVIDOR ACTUALITZACIONS


## 1. Instal·lació dels serveis necessaris
Per servir els fitxers i gestionar la rèplica, instal·lem el servidor web **Apache2** i l'eina **apt-mirror**.

> **Pas 1.1:** Instal·lació del servidor Apache2.
<img width="988" height="274" alt="1" src="https://github.com/user-attachments/assets/92f70f1d-2831-4e5a-81ef-bab4b79efbdd" />


> **Pas 1.2:** Instal·lació de l'eina de rèplica apt-mirror.
<img width="544" height="108" alt="2" src="https://github.com/user-attachments/assets/95998662-1ac0-4770-ba6d-6ebb239c714f" />


---

## 2. Configuració del Mirror
Editem el fitxer de configuració de `apt-mirror` per indicar quin repositori volem replicar. Hem afegit la línia corresponent al repositori estable de Google Chrome.

* **Fitxer:** `/etc/apt/mirror.list`
* **Línia afegida:** `deb [arch=amd64] http://dl.google.com/linux/chrome/deb stable main`

> **Pas 2:** Configuració de la font a mirror.list.
<img width="850" height="585" alt="3" src="https://github.com/user-attachments/assets/d3ab74b9-8e8e-412e-8308-41f526b1cb19" />


---

## 3. Descàrrega dels paquets (Sincronització)
Executem la comanda `apt-mirror` per iniciar la descàrrega de tots els metadades i paquets del repositori oficial cap al nostre disc local.

> **Pas 3:** Execució de la descàrrega inicial.
<img width="865" height="834" alt="4" src="https://github.com/user-attachments/assets/8928272c-3a16-441b-a013-d996572dcae1" />


---

## 4. Publicació al servidor web
Perquè altres equips puguin accedir als fitxers, creem un enllaç simbòlic des del directori de descàrrega cap a la ruta pública del servidor Apache (`/var/www/html`).

> **Pas 4:** Creació de l'enllaç simbòlic (ln -s).
<img width="1338" height="40" alt="5" src="https://github.com/user-attachments/assets/97dab81e-cb56-4dba-b784-5bd74c24c478" />


---

## 5. Configuració del client per utilitzar el Mirror local
Modifiquem el fitxer `sources.list` del sistema perquè apunti a la nostra adreça IP local (`10.0.2.15`) en comptes dels servidors de Google.

* **Fitxer:** `/etc/apt/sources.list`

> **Pas 5:** Modificació del fitxer sources.list.
<img width="855" height="822" alt="6" src="https://github.com/user-attachments/assets/bd937190-9da0-4a82-a044-2034121799f0" />


---

## 6. Validació i Instal·lació
Finalment, importem la clau GPG de Google per validar els paquets, actualitzem la llista de repositoris i instal·lem el navegador.

> **Pas 6.1:** Importació de la clau de signatura de Google.
<img width="878" height="106" alt="7" src="https://github.com/user-attachments/assets/7a25f077-e974-4d0f-b427-e04b726e4230" />


> **Pas 6.2:** Actualització de repositoris (`apt update`). Es confirma que connecta amb la IP local.
<img width="872" height="290" alt="8" src="https://github.com/user-attachments/assets/526723b1-5e7d-4648-9812-cce9fc3c4f86" />


> **Pas 6.3:** Instal·lació final de Google Chrome des del nostre mirror.
<img width="878" height="313" alt="9" src="https://github.com/user-attachments/assets/47f2131b-33f5-4e0b-95d4-5a9d3aa7f139" />


## EXERCICI EXTRA:

# Documentació: Creació d'un Repositori Mirror Local per a Docker

Aquest apartat detalla la configuració d'un mirror local per als paquets de Docker en Ubuntu Jammy, permetent la distribució d'aquest programari dins d'una xarxa local.

---

## 1. Configuració de la font a apt-mirror
El primer pas consisteix a afegir el repositori oficial de Docker al fitxer de configuració de l'eina de rèplica.

* **Fitxer:** `/etc/apt/mirror.list`
* **Línia afegida:** `deb [arch=amd64] https://download.docker.com/linux/ubuntu jammy stable`

> **Pas 1:** Edició del fitxer mirror.list per incloure Docker.
<img width="685" height="346" alt="1" src="https://github.com/user-attachments/assets/fd07340d-bf22-4029-9feb-d4e911b41dd8" />


---

## 2. Sincronització del repositori
Executem la comanda `apt-mirror` per descarregar els paquets. Durant el procés, es pot observar la indexació dels binaris per a l'arquitectura amd64 i la versió Jammy.

> **Pas 2:** Execució del procés de descàrrega i indexació.
<img width="871" height="842" alt="2" src="https://github.com/user-attachments/assets/3df14f39-4478-45e7-86c5-c87db743c0f7" />


---

## 3. Publicació i enllaç simbòlic
Un cop descarregat, hem de fer que el contingut sigui accessible via web. Creem l'estructura de directoris necessària i un enllaç simbòlic que apunti des del servidor Apache cap als fitxers descarregats.

> **Pas 3:** Creació de directoris i enllaç simbòlic inicial.
<img width="981" height="80" alt="3" src="https://github.com/user-attachments/assets/f85b3a77-768f-479d-b6f8-020add6cd873" />


> **Pas 4:** Detall de la creació de l'enllaç simbòlic correcte per a la ruta de Docker.
<img width="882" height="80" alt="5" src="https://github.com/user-attachments/assets/6f352b72-7298-44a2-9575-72b8b77812f3" />


---

## 5. Configuració del client local
Perquè el sistema utilitzi el nostre mirror en lloc d'Internet, modifiquem el fitxer de fonts del client apuntant a la IP del nostre servidor local (`10.0.2.15`).

* **Fitxer:** `/etc/apt/sources.list`

> **Pas 5:** Modificació del sources.list apuntant a la IP local.
<img width="750" height="198" alt="4" src="https://github.com/user-attachments/assets/358205cc-7236-4c56-b8a4-41d81805e935" />


---

## 6. Seguretat i Validació
Per finalitzar, importem la clau GPG oficial de Docker per garantir la integritat dels paquets descarregats des del nostre servidor local.

> **Pas 6:** Importació de la clau GPG de Docker.
<img width="881" height="104" alt="6" src="https://github.com/user-attachments/assets/3b86234a-a9c3-4f20-8823-6317cdecb373" />


## EXERCICI 1

# Documentació: Configuració de Servidor de Logs Remot amb rsyslog

Aquesta pràctica detalla els passos per configurar un servidor centralitzat de registres (logs) i un client que hi envia la seva activitat mitjançant el protocol UDP.

---

## 1. Configuració del Servidor (Recepció)
Perquè el servidor pugui rebre logs d'altres màquines, hem d'habilitar el mòdul d'entrada UDP al fitxer de configuració principal.

* **Fitxer:** `/etc/rsyslog.conf`
* **Acció:** Descomentar les línies `module(load="imudp")` i `input(type="imudp" port="514")`.

> **Pas 1:** Activació de la recepció UDP al port 514.
<img width="490" height="83" alt="1" src="https://github.com/user-attachments/assets/976c4048-7f3c-488a-a361-1927334d9816" />


---

## 2. Reinici i Obertura del Firewall
Un cop desada la configuració, reiniciem el servei i configurem el firewall (UFW) per permetre el trànsit d'entrada pel port 514/udp.

> **Pas 2:** Reinici del servei i obertura del port al firewall.
<img width="532" height="97" alt="2" src="https://github.com/user-attachments/assets/0c348423-ab1b-4ece-ac67-ca717f781928" />


---

## 3. Configuració del Client (Enviament)
En la màquina client, hem d'indicar a on s'han d'enviar els logs. Afegim una línia al final del fitxer de configuració apuntant a la IP del servidor.

* **Línia afegida:** `*.* @192.168.56.111:514` (L'arrova `@` simple indica UDP).

> **Pas 3:** Configuració del client per enviar logs al servidor remot.
<img width="481" height="159" alt="3" src="https://github.com/user-attachments/assets/a7c12a2b-a579-4ac3-85c5-86f11e09036c" />


---

## 4. Verificació del funcionament
Per comprovar que la configuració és correcta, utilitzem l'eina `logger` al client per enviar un missatge de prova. Després, revisem el fitxer `/var/log/syslog` al servidor per confirmar que el missatge ha arribat.

> **Pas 4:** Prova de missatge remot i visualització en temps real.
<img width="1771" height="562" alt="4" src="https://github.com/user-attachments/assets/cd36de1a-f84b-4b1b-8d90-f206cdedda52" />
