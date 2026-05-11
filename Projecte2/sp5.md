# 🌀 Sprint 5: Monitoratge, Auditories i Programari Client/Servidor
---

## 🧠 CPU (Unitat Central de Processament)
*L'indicador principal de la càrrega de treball del sistema.*

### 🔍 Què ens mostra?
* **Processos actius:** Llistat complet de tasques i el percentatge de potència de càlcul que consumeixen.
* **Jerarquia de serveis:** Subprocessos i serveis vinculats a cada aplicació.
* **Mètriques tècniques:** Temps de processament, recompte de fils (*threads*) i l'ID de procés (**PID**).

### 💡 Explicació Tècnica
| Paràmetre | Descripció | Alerta |
| :--- | :--- | :--- |
| **Ús de CPU (%)** | Proporció del processador dedicada a cada tasca. | Valors > **80-90%** constants indiquen sobrecàrrega. |
| **PID** | Identificador numèric únic per a cada procés. | Útil per a diagnòstic en PowerShell o Visor d'Esdeveniments. |
| **Nom del procés** | Identifica aplicacions (Chrome) o serveis del sistema. | Compte amb noms estranys o `svchost.exe` amb consum anòmal. |

---

## 💾 Memòria (RAM)
*Gestió de l'espai de treball volàtil i la velocitat d'accés a les dades.*

### 🔍 Què ens mostra?
* **Consum per procés:** Quantitat exacta de RAM assignada a cada tasca.
* **Estat físic:** Distribució entre memòria en ús, lliure, en espera o modificada.
* **Memòria virtual:** Estat del fitxer de paginació (*swap*) i errors d'accés.

### 💡 Explicació Tècnica
* **Memòria en ús:** La RAM que l'aplicació està utilitzant activament en aquest instant.
* **Memòria en espera (*Standby*):** Dades que Windows manté preparades per a un accés ràpid si es tornen a necessitar.
* **Memòria disponible:** Suma de la memòria lliure i la memòria en espera.
* **Memòria virtual:** Combinació de RAM física i espai en disc. Un ús excessiu d'aquesta sol indicar una manca de RAM física.

---

## 💽 Disc
*Monitorització de la transferència de dades i la salut del suport d'emmagatzematge.*

### 🔍 Què ens mostra?
* **Activitat d'E/S:** Processos que estan realitzant operacions de lectura o escriptura.
* **Velocitat de transferència:** Bytes llegits/escrits per segon en temps real.
* **Latència:** Temps de resposta del maquinari davant les peticions.

### 💡 Explicació Tècnica
> [!IMPORTANT]
> **Temps de resposta (ms):** El temps que triga el disc a contestar. Valors superiors a **20-30 ms** de forma sostinguda indiquen problemes greus de rendiment.

* **Lectura/Escriptura (B/s):** Volum de dades que es mouen cap al disc o des del disc.
* **Cua de disc:** Nombre de peticions pendents. Si la cua és molt alta, el sistema experimentarà pauses i lentitud generalitzada.

---

## 🌐 Xarxa
*Control del flux de dades i de les comunicacions externes.*

### 🔍 Què ens mostra?
* **Trànsit d'aplicacions:** Quins programes estan consumint amplada de banda.
* **Connexions remotes:** Direccions IP i ports de comunicació utilitzats (Tx/Rx).

### 💡 Explicació Tècnica
* **Utilització de xarxa (%):** Percentatge de càrrega respecte a la capacitat total de la connexió.
* **Ports locals/remots:** Permet identificar el tipus de servei:
    * `80` (HTTP) / `443` (HTTPS)
    * `21` (FTP)
* **Connexions actives:** Eina fonamental per detectar connexions sospitoses o programari maliciós que intenta comunicar-se amb l'exterior.

---

## Pràctica

Farem un Ctrl + Shift + Esc per a obrir l'administrador de tasques

<img width="661" height="590" alt="image" src="https://github.com/user-attachments/assets/180a0739-7a9d-4ec2-8f3b-1e1866018429" />

L'**Administrador de tasques** actua com el centre de control del rendiment del sistema, oferint una visió detallada de l'impacte de cada element sobre el programari:

* **Consum global:** Monitoratge en temps real de l'ús de recursos de tots els serveis i aplicacions actius al dispositiu.
* **Segmentació per usuari:** Permet desglossar el consum de recursos per cada sessió activa, facilitant la identificació d'usuaris que puguin estar saturant el sistema en entorns multiusuari.
* **Control de serveis:** Possibilitat d'analitzar tant el programari en primer pla com els serveis de sistema que s'executen en segon pla.

<img width="661" height="590" alt="image" src="https://github.com/user-attachments/assets/8743afcc-53cc-4dfe-9f85-202fa22ee296" />

<img width="661" height="590" alt="image" src="https://github.com/user-attachments/assets/6a13d1fd-c5e1-4cc5-a732-533942f9747a" />

<img width="943" height="314" alt="image" src="https://github.com/user-attachments/assets/3148e28d-7262-4197-9797-ca1aec9a73cf" />

<img width="430" height="337" alt="image" src="https://github.com/user-attachments/assets/570d38e0-3b0e-4036-86c1-af4ebfe7de48" />

A més de l'Administrador de tasques, Windows ofereix el **Monitor de recursos**, una eina avançada que permet un diagnòstic molt més exhaustiu:

* **Anàlisi detallada:** Ofereix informació granular sobre l'estat de cada servei i aplicació, superant les mètriques bàsiques.
* **Aïllament de processos:** Permet monitorar de forma específica com un sol procés interactua amb el processador, la memòria, el disc i la xarxa simultàniament.
* **Control en temps real:** Ideal per identificar bloquejos de fitxers o processos que no responen, mostrant cadenes d'espera i dependències del sistema.

<img width="941" height="665" alt="image" src="https://github.com/user-attachments/assets/87011ff2-4afc-45b7-a742-df9f4fda2b11" />

<img width="941" height="775" alt="image" src="https://github.com/user-attachments/assets/4c61dafa-eefa-4a9c-8dc8-a902ef1ac880" />

<img width="941" height="584" alt="image" src="https://github.com/user-attachments/assets/a6592861-ce1a-402f-abfc-06ac7042417b" />

<img width="941" height="524" alt="image" src="https://github.com/user-attachments/assets/71119fb8-877c-44f6-ade9-c46372d6e150" />

<img width="941" height="663" alt="image" src="https://github.com/user-attachments/assets/1bcc78b3-6134-4122-83fd-b28bf8a14137" />

<img width="941" height="772" alt="image" src="https://github.com/user-attachments/assets/435419c4-8b8d-4836-8e93-7bddfaf9926b" />
