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
*Documentació generada per a la unitat de sistemes Windows - Sprint 5.*
