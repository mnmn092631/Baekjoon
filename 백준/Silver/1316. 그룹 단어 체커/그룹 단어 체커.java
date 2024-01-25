import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int n = Integer.parseInt(br.readLine());
		int count = n;

		for (int i = 0; i < n; i++) {
			int[] alphabet = new int[26];
			String str = br.readLine();
			alphabet[str.charAt(0) - 97] = 1;

			for (int j = 1; j < str.length(); j++) {
				if (str.charAt(j) == str.charAt(j - 1))
					continue;
				if (alphabet[str.charAt(j) - 97] != 0) {
					count--;
					break;
				}
				alphabet[str.charAt(j) - 97] = 1;
			}
		}

		System.out.print(count);
	}

}
