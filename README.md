# 🍷 Cadastro de Vinhos

Aplicativo mobile desenvolvido com **React Native**, **Expo** e **TypeScript** para registrar e gerenciar os vinhos da sua adega pessoal.

---

## 📱 Funcionalidades

- ✅ Tela inicial com boas-vindas e botão de ação
- ✅ Navegação entre telas (React Navigation)
- ✅ Formulário para adicionar novos vinhos
- 🔜 Listagem e detalhes dos vinhos cadastrados
- 🔜 Armazenamento local usando `AsyncStorage` ou banco de dados local

---

## 🚀 Tecnologias utilizadas

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
- [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

---

## 🧱 Estrutura do Projeto

```
cadastro-vinhos/
├── src/
│   ├── navigation/            # Stack de navegação
│   └── screens/               # Telas separadas em pastas por função
│       ├── Home/              # Tela inicial
│       ├── AddWine/           # Formulário de adição
│       └── WineDetail/        # Detalhes do vinho
├── App.tsx                    # Entrada principal do app
├── README.md                  # Este arquivo
```

---

## 🛠️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/cadastro-vinhos.git
cd cadastro-vinhos
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o projeto com Expo

```bash
npm start
```

> Isso abrirá o **Metro Bundler**. Escaneie o QR code com o app **Expo Go** ou utilize um emulador Android/iOS.

---

## 📦 Pacotes importantes já instalados

```bash
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
npm install @react-navigation/native-stack
```

---



## 📌 Próximos passos

- [ ] Armazenar vinhos com `AsyncStorage`
- [ ] Exibir a lista de vinhos na `HomeScreen`
- [ ] Navegar para `WineDetailScreen` com os dados do vinho selecionado

---

## 🧑‍💻 Autor

Desenvolvido por **Luiz Felipe Della Valentina Gervazio** ✨
