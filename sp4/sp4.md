# 🌀 Sprint 4: Configuració del Programari de Base i Sistemes d’Emmagatzematge en Ubuntu

# 🗄️ Guia Completa de RAID (Redundant Array of Independent Disks)

## 📌 Què és un RAID?

**RAID (Redundant Array of Independent Disks)** és una tecnologia que combina múltiples discos durs en una sola unitat lògica amb l’objectiu de:

- Millorar el rendiment ⚡
- Augmentar la tolerància a fallades 🛡️
- Optimitzar l’emmagatzematge 📦

---

## 🧠 Conceptes Clau

| Concepte        | Descripció |
|----------------|----------|
| **Striping**    | Distribució de dades entre discos per millorar velocitat |
| **Mirroring**   | Duplicació de dades per redundància |
| **Parity**      | Informació extra per recuperar dades en cas de fallada |

---

## 📊 Tipus de RAID més comuns

---

### 🔹 RAID 0 (Striping)

**Funcionament:**
- Divideix les dades entre múltiples discos.

**Avantatges:**
- 🚀 Rendiment molt alt
- 💾 100% de capacitat útil

**Desavantatges:**
- ❌ Cap tolerància a fallades
- Si falla un disc → es perd tot

**Mínim de discos:** 2
Disc 1: A1 A3 A5
Disc 2: A2 A4 A6


---

### 🔹 RAID 1 (Mirroring)

**Funcionament:**
- Duplica exactament les dades en dos discos.

**Avantatges:**
- 🛡️ Alta seguretat
- Recuperació ràpida

**Desavantatges:**
- 💸 Només 50% de capacitat útil

**Mínim de discos:** 2
Disc 1: A1 A2 A3
Disc 2: A1 A2 A3


---

### 🔹 RAID 5 (Striping + Parity)

**Funcionament:**
- Dades distribuïdes + paritat distribuïda entre discos.

**Avantatges:**
- ⚖️ Bon equilibri entre rendiment i seguretat
- 🛡️ Pot fallar 1 disc

**Desavantatges:**
- 🐢 Escriptura més lenta (càlcul de paritat)
- 🔧 Reconstrucció lenta

**Mínim de discos:** 3
Disc 1: D1 D4 P3
Disc 2: D2 P1 D5
Disc 3: P2 D3 D6


---

### 🔹 RAID 6 (Striping + doble paritat)

**Funcionament:**
- Similar a RAID 5 però amb doble paritat.

**Avantatges:**
- 🛡️ Pot fallar fins a 2 discos
- 🔒 Alta seguretat

**Desavantatges:**
- 🐌 Rendiment d’escriptura més baix
- 💾 Menys capacitat útil

**Mínim de discos:** 4

---

### 🔹 RAID 10 (RAID 1 + RAID 0)

**Funcionament:**
- Combina mirroring i striping.

**Avantatges:**
- 🚀 Molt alt rendiment
- 🛡️ Alta redundància

**Desavantatges:**
- 💸 Cost elevat (50% capacitat útil)

**Mínim de discos:** 4
Grup 1: Disc 1 ↔ Disc 2
Grup 2: Disc 3 ↔ Disc 4
(Striping entre grups)


---

## ⚖️ Comparativa ràpida

| RAID | Rendiment | Seguretat | Capacitat útil | Fallades tolerades |
|------|----------|----------|---------------|-------------------|
| 0    | ⭐⭐⭐⭐     | ❌        | 100%          | 0                 |
| 1    | ⭐⭐       | ⭐⭐⭐⭐     | 50%           | 1                 |
| 5    | ⭐⭐⭐      | ⭐⭐⭐      | ~75%          | 1                 |
| 6    | ⭐⭐       | ⭐⭐⭐⭐     | ~66%          | 2                 |
| 10   | ⭐⭐⭐⭐     | ⭐⭐⭐⭐     | 50%           | ≥1 (segons config)|

---

## 🧩 Quan utilitzar cada RAID?

- **RAID 0** → Edició de vídeo / gaming (on la velocitat és clau i no importa perdre dades)
- **RAID 1** → Sistemes crítics petits (backups simples)
- **RAID 5** → Servidors generals / NAS
- **RAID 6** → Entorns amb moltes dades crítiques
- **RAID 10** → Bases de dades / alta disponibilitat

---

## ⚠️ Consideracions importants

- RAID **NO substitueix backups**
- La reconstrucció pot ser lenta en discos grans
- Cal controladora RAID (hardware o software)

---

## 🛠️ RAID per Software vs Hardware

| Tipus      | Avantatges | Desavantatges |
|-----------|----------|--------------|
| Software  | Flexible, econòmic | Usa CPU |
| Hardware  | Millor rendiment | Cost elevat |

---

## 🧾 Resum

- RAID millora rendiment i/o seguretat segons configuració
- Cada nivell té compromisos entre velocitat, capacitat i redundància
- L’elecció depèn del cas d’ús

1
<img width="703" height="259" alt="1" src="https://github.com/user-attachments/assets/55d66c2a-9952-42e8-8bde-7740d9781cf9" />

2
<img width="563" height="451" alt="2" src="https://github.com/user-attachments/assets/c35e47ed-2d8c-43bf-96d0-7ed5f8243a68" />

3
<img width="706" height="471" alt="3" src="https://github.com/user-attachments/assets/41ef20de-260e-41e6-a6b5-36faf6c2f1f5" />

4
<img width="707" height="474" alt="4" src="https://github.com/user-attachments/assets/d594d00b-83e0-43ee-8b70-25363ddf3573" />

5
<img width="476" height="129" alt="5" src="https://github.com/user-attachments/assets/574a0434-e84e-4a57-b76a-ef1083eda0ed" />

6
<img width="897" height="182" alt="6" src="https://github.com/user-attachments/assets/9cfdd959-0f81-41e8-b72d-b7deb9063425" />

7
<img width="822" height="206" alt="7" src="https://github.com/user-attachments/assets/1f43f1ca-68de-4b2c-bd25-2667b5be9db2" />

8
<img width="683" height="487" alt="8" src="https://github.com/user-attachments/assets/a82aba2d-6a31-4444-84c5-a5b05a9d188f" />

9
<img width="847" height="73" alt="9" src="https://github.com/user-attachments/assets/5f2c8233-9bee-4fd8-a96b-22b1e070aeb8" />

10
<img width="1040" height="59" alt="10" src="https://github.com/user-attachments/assets/74789609-b767-4819-957c-d0775ae1c852" />

11
<img width="713" height="261" alt="11" src="https://github.com/user-attachments/assets/a6c746b3-9b58-444c-9de1-bb58d476d89c" />

12
Hem tingut que actualitzar amb el initramfs per a poder entrar al ubuntu
<img width="491" height="116" alt="image" src="https://github.com/user-attachments/assets/2de0b1eb-223b-4772-a588-2e43b72c4563" />

13
<img width="536" height="148" alt="13" src="https://github.com/user-attachments/assets/3c40b3c6-6d0a-4589-b26b-2d3c1d2d48f5" />

14
<img width="680" height="538" alt="14" src="https://github.com/user-attachments/assets/4a3bce5a-b337-4526-a1bb-a452a743f01a" />

15
<img width="576" height="98" alt="15" src="https://github.com/user-attachments/assets/ba221938-3aef-4177-95eb-9b6365971a01" />

16
<img width="679" height="562" alt="16" src="https://github.com/user-attachments/assets/588f9f81-8db2-4e4f-81f2-77f9c3ab1b09" />

Esborrar raid

1
<img width="701" height="276" alt="17" src="https://github.com/user-attachments/assets/bcac9410-74c5-4d14-9843-9dc4cd5941f4" />

2
<img width="740" height="187" alt="18" src="https://github.com/user-attachments/assets/7d04a61d-8adc-428b-a636-cbe0dd429e26" />

3
Borrem tot el contingut de l'archiu mdadm.conf
<img width="522" height="155" alt="19" src="https://github.com/user-attachments/assets/3af64f9d-dd29-424f-b78b-410e1683ec62" />

4
<img width="552" height="91" alt="20" src="https://github.com/user-attachments/assets/7d880119-b602-4ab3-b390-7a1f02d80232" />
