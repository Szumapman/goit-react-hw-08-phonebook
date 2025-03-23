# Zadanie domowe #8 - React

## Książka kontaktów

Dodaj w aplikacji "Książka kontaktów" możliwość rejestracji, logowania i aktualizacji użytkownika, a także pracy z prywatnym zbiorem kontaktów.

### Back-end

Do tego zadania istnieje gotowy back-end. Zapoznaj się z [dokumentacją](https://connections-api.goit.global/docs/). Wspiera wszystkie niezbędne operacje z listy kontaktów oraz rejestrację, logowanie i aktualizację użytkownika przy pomocy JWT. Wykorzystaj go zamiast twojego back-endu utworzonego przez serwis `mockapi.io`.

### Trasowanie

Dodaj trasowanie z biblioteką React Router. W aplikacji powinno być kilka stron:

* `/register` - publiczna trasa rejestracji nowego użytkownika z formularzem
* `/login` - publiczna trasa logowania istniejącego użytkownika z formularzem
* `/contacts` - prywatna trasa do pracy z listą kontaktów użytkownika
Dodaj komponent nawigacji `Navigation` z odnośnikami do przechodzenia po trasach.

### Menu użytkownika

Utwórz komponent `UserMenu`, wyświetlający adres email użytkownika i przycisk wyjścia z konta. Jego układ może wyglądać następująco:

```
<div>
  <p>mango@mail.com</p>
  <button>Logout</button>
</div>
```

### Stylizacja

To finalna wersja aplikacji, dlatego popracuj nad szatą graficzną interfejsu. Można wykorzystać bibliotekę stylizacji lub komponentów, na przykład [Chakra UI](https://chakra-ui.com/) lub [Material UI](https://mui.com/).
