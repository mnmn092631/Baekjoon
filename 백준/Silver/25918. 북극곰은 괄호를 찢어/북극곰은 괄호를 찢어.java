import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static int getDays(int n, String str) {
		if (n % 2 != 0) return -1;

		int maxDep = 1;
		int top = 0;
		char[] stack = new char[n];
		
		for (int i = 0; i < n; i++) {
			stack[top] = str.charAt(i);
			if (top > 0 && stack[top - 1] != stack[top]) {
				if (top > maxDep) maxDep = top;
				top--;
				continue;
			}
			top++;
		}

		if (top == 0) return maxDep;
		return -1;
	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int n = Integer.parseInt(br.readLine());
		String str = br.readLine();

		System.out.print(getDays(n, str));
	}

}
