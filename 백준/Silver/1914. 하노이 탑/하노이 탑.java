import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigInteger;

public class Main {
	public static StringBuilder sb = new StringBuilder();

	public static void Hanoi(int num, int from, int mid, int to) {
		if (num == 1) {
			sb.append(from).append(" ").append(to).append("\n");
		} else {
			Hanoi(num - 1, from, to, mid);
			sb.append(from).append(" ").append(to).append("\n");
			Hanoi(num - 1, mid, from, to);
		}
	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int n = Integer.parseInt(br.readLine());
		BigInteger num = new BigInteger("2");
		BigInteger num1 = new BigInteger("1");
		sb.append(num.pow(n).subtract(num1)).append("\n");
		if (n <= 20) Hanoi(n, 1, 2, 3);

		System.out.print(sb);
	}

}
