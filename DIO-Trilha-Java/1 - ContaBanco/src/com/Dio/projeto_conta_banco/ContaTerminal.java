package com.site.projeto_conta_banco;

import java.util.Scanner;

public class ContaTerminal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String nomeCliente = "";
        String senha = "";
        int numero = 1021;
        String agencia = "076-8";
        float saldo = 237.48f;

        System.out.println(" -------------------------");
        System.out.println("| Cadastro conta de Banco |");
        System.out.println(" -------------------------");
        System.out.println(" ----------------------------");
        System.out.println("| Informe seu Nome Completo. |");
        System.out.println(" ----------------------------");
        nomeCliente = scanner.nextLine();
        System.out.println(" -------------------- ");
        System.out.println("| Escolha uma senha. |");
        System.out.println(" -------------------- ");
        senha = scanner.nextLine();
        System.out.println(" ---------------------------------");
        System.out.println("| Seu saldo está sendo carregado. |");
        System.out.println(" ---------------------------------");
        System.out.println(" ---------------------------------");
        System.out.println("| Olá, " + nomeCliente + "                      |");
        System.out.println("| Seja bem-vindo ao nosso banco. |");
        System.out.println("| Obrigado por criar sua conta.  |");
        System.out.println("| Sua agência é " + agencia + "            |");
        System.out.println("| Seu saldo disponível é " + saldo + "  |");
        System.out.println(" ---------------------------------");
    }
}
